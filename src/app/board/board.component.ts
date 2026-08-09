/*
board.component.ts
*/
import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  HostListener,
} from "@angular/core";
import {
  COLS,
  BLOCK_SIZE,
  ROWS,
  COLORS,
  LINES_PER_LEVEL,
  LEVEL,
  POINTS,
  KEY,
  HIGH_SCORE_KEY,
} from "../constants";
import { Piece, IPiece } from "../piece.component";
import { GameService } from "../game.service";

@Component({
  selector: "game-board",
  templateUrl: "board.component.html",
  styleUrls: ["./board.component.css"],
  standalone: false,
})
export class BoardComponent implements OnInit {
  isAnimating = false;
  highScore = 0;

  @ViewChild("board", { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild("next", { static: true })
  canvasNext!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;
  ctxNext!: CanvasRenderingContext2D;
  board!: number[][];
  piece!: Piece;
  next!: Piece;
  requestId = 0;
  time!: { start: number; elapsed: number; level: number };
  points = 0;
  lines = 0;
  level = 0;

  moves: Record<number, (p: IPiece) => IPiece> = {
    [KEY.LEFT]: (p: IPiece): IPiece => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    [KEY.SPACE]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    [KEY.UP]: (p: IPiece): IPiece => this.service.rotate(p),
  };

  @HostListener("window:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (this.isAnimating) return;

    const keyCode = event.keyCode;
    const move = this.moves[keyCode];

    if (keyCode === KEY.ESC) {
      this.gameOver();
    } else if (move) {
      event.preventDefault();

      let p = move(this.piece);

      if (keyCode === KEY.SPACE) {
        while (this.service.valid(p, this.board)) {
          this.updateScore(POINTS.HARD_DROP);
          this.piece.move(p);
          p = this.moves[KEY.DOWN](this.piece);
        }
        this.drop();
      } else if (this.service.valid(p, this.board)) {
        this.piece.move(p);
        if (keyCode === KEY.DOWN) {
          this.updateScore(POINTS.SOFT_DROP);
        }
      }
    }
  }

  constructor(private service: GameService) {}

  ngOnInit() {
    this.initBoard();
    this.initNext();
    this.resetGame();
    this.highScore = Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
  }

  initBoard() {
    const ctx = this.canvas.nativeElement.getContext("2d");
    if (!ctx)
      throw new Error("Could not get 2D context for main board canvas.");
    this.ctx = ctx;

    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  initNext() {
    const ctxNext = this.canvasNext.nativeElement.getContext("2d");
    if (!ctxNext)
      throw new Error("Could not get 2D context for next-piece canvas.");
    this.ctxNext = ctxNext;

    this.ctxNext.canvas.width = 4 * BLOCK_SIZE;
    this.ctxNext.canvas.height = 4 * BLOCK_SIZE;
    this.ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  play() {
    this.resetGame();
    this.next = new Piece(this.ctxNext);
    this.piece = new Piece(this.ctx);
    this.next.drawNext(this.ctxNext);
    this.time.start = performance.now();

    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }

    this.animate();
  }

  resetGame() {
    this.points = 0;
    this.lines = 0;
    this.level = 0;
    this.board = this.getEmptyBoard();
    this.time = {
      start: 0,
      elapsed: 0,
      level: (LEVEL as unknown as Record<number, number>)[this.level],
    };
  }

  animate(now = 0) {
    if (this.isAnimating) {
      this.draw();
      this.requestId = requestAnimationFrame(this.animate.bind(this));
      return;
    }

    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > this.time.level) {
      this.time.start = now;
      if (!this.drop()) {
        this.gameOver();
        return;
      }
    }
    this.draw();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.piece.drawMain();
    this.drawBoard();
  }

  drop(): boolean {
    let p = this.moves[KEY.DOWN](this.piece);
    if (this.service.valid(p, this.board)) {
      this.piece.move(p);
    } else {
      this.freeze();
      this.clearLines();
      if (this.piece.y === 0) {
        return false;
      }
      this.piece = this.next;
      this.piece.setContext(this.ctx);
      this.next = new Piece(this.ctxNext);
      this.next.drawNext(this.ctxNext);
    }
    return true;
  }

  async clearLines() {
    let lines = 0;
    const linesToFlash: number[] = [];

    this.board.forEach((row, y) => {
      if (row.every((value) => value !== 0)) {
        lines++;
        linesToFlash.push(y);
      }
    });

    if (lines > 0) {
      this.isAnimating = true;

      const originalValues = linesToFlash.map((y) => [...this.board[y]]);
      linesToFlash.forEach((y) => this.board[y].fill(-1));
      await new Promise((resolve) => setTimeout(resolve, 200));

      linesToFlash.forEach((y, index) => {
        this.board[y] = [...originalValues[index]];
      });
      await new Promise((resolve) => setTimeout(resolve, 200));

      linesToFlash.forEach((y) => this.board[y].fill(-1));
      await new Promise((resolve) => setTimeout(resolve, 200));

      linesToFlash.forEach(() => {
        this.board.forEach((row, y) => {
          if (row.every((value) => value === -1)) {
            this.board.splice(y, 1);
            this.board.unshift(Array(COLS).fill(0));
          }
        });
      });

      this.updateScore(this.service.getLinesClearedPoints(lines, this.level));
      this.lines += lines;

      if (this.points > this.highScore) {
        this.highScore = this.points;
        localStorage.setItem(HIGH_SCORE_KEY, this.highScore.toString());
      }

      if (this.lines >= LINES_PER_LEVEL) {
        this.level++;
        this.lines -= LINES_PER_LEVEL;
        this.time.level =
          (LEVEL as unknown as Record<number, number>)[this.level] ?? 30;
      }

      this.isAnimating = false;
      this.time.start = performance.now();
    }
  }

  updateScore(pointsToAdd: number) {
    this.points += pointsToAdd;
    if (this.points > this.highScore) {
      this.highScore = this.points;
      localStorage.setItem(HIGH_SCORE_KEY, this.highScore.toString());
    }
  }

  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.board[y + this.piece.y][x + this.piece.x] = value;
        }
      });
    });
  }

  drawBoard() {
    this.board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.ctx.fillStyle = value === -1 ? "white" : COLORS[value];
          this.ctx.fillRect(x, y, 1, 1);

          this.ctx.strokeStyle = "#000000";
          this.ctx.lineWidth = 0.05;
          this.ctx.strokeRect(x, y, 1, 1);
        }
      });
    });
  }

  gameOver() {
    cancelAnimationFrame(this.requestId);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(1, 3, 8, 1.2);
    this.ctx.font = "1px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("GAME OVER", 1.8, 4);
  }

  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }
}
