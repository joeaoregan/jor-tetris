import { COLORS, SHAPES } from "./constants";

export interface IPiece {
  x: number;
  y: number;
  color: string;
  shape: number[][];
}

export class Piece implements IPiece {
  x!: number;
  y!: number;
  color!: string;
  shape!: number[][];

  constructor(private ctx: CanvasRenderingContext2D) {
    this.spawn();
  }

  spawn() {
    const typeId = this.randomizeTetrominoType(COLORS.length - 1);
    this.shape = SHAPES[typeId];
    this.color = COLORS[typeId];
    this.x = typeId === 4 ? 4 : 3;
    this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D, offsetX = this.x, offsetY = this.y) {
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = this.color;
          ctx.fillRect(offsetX + x, offsetY + y, 1, 1);
          ctx.strokeStyle = "#000000";
          ctx.lineWidth = 0.05;
          ctx.strokeRect(offsetX + x, offsetY + y, 1, 1);
        }
      });
    });
  }

  drawMain() {
    this.draw(this.ctx);
  }

  drawNext(ctxNext: CanvasRenderingContext2D) {
    ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);
    this.draw(ctxNext, 0, 0);
  }

  move(p: IPiece) {
    this.x = p.x;
    this.y = p.y;
    this.shape = p.shape;
  }

  randomizeTetrominoType(noOfTypes: number): number {
    return Math.floor(Math.random() * noOfTypes + 1);
  }

  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
}
