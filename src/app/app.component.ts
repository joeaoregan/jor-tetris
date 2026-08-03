/*
app.component.ts
board component
*/
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <header class="topbar">
      <div class="topbar-row">
        <nav class="topnav" aria-label="Main navigation">
          <a
            class="nav-link"
            href="https://joeoregan.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            >Home</a
          >
          <a class="nav-link active" href="./">Angular Tetris</a>
        </nav>

        <button class="theme-toggle" type="button" (click)="toggleTheme()">
          Toggle Theme
        </button>
      </div>
    </header>

    <game-board></game-board>
    <app-info></app-info>
    <app-footer></app-footer>
  `,
  styles: [],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = "ng-tetris";

  ngOnInit(): void {
    const saved = localStorage.getItem("tetris-theme");
    const theme = saved === "light" || saved === "dark" ? saved : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  }

  toggleTheme(): void {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("tetris-theme", next);
  }
}
