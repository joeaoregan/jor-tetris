# Tetris (Angular/TypeScript)

<p align="left">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <a href="https://tetris-js.onrender.com/">
    <img src="https://img.shields.io/badge/Render-Live%20Demo-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
  </a>
</p>

![Angular](https://img.shields.io/badge/Angular-22-DD0031?style=flat-square&logo=angular&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=flat-square&logo=reactivex&logoColor=white)
![ESLint](https://img.shields.io/badge/Linter-ESLint-4B32C3?style=flat-square&logo=eslint)
![GitHub top language](https://img.shields.io/github/languages/top/joeoregan/Angular-Tetris)
![Responsive](https://img.shields.io/badge/UI-Responsive-0A8F08?style=flat-square)

![GitHub repo size](https://img.shields.io/github/repo-size/joeoregan/Angular-Tetris?color=orange)
![GitHub last commit](https://img.shields.io/github/last-commit/joeoregan/Angular-Tetris?color=blue)
![Stars](https://img.shields.io/github/stars/joeoregan/Angular-Tetris?style=social)

---

Tetris game in Angular:

- [Play App on Render](https://tetris-js.onrender.com/ "See App on Render")
- [Play App on GitHub Pages](https://joeoregan.github.io/Angular-Tetris/ "See App on GitHub Pages")

- CSS added
- Deployment to Render to test Angular app deployment
- Dependencies updated
- Angular version updated
- Added borders to Tetromino pieces
- High Score
- Flash when lines complete / cleared

---

## Video

<a href="https://youtu.be/xD_03mSvV3s"><img src="https://raw.githubusercontent.com/joeoregan/Angular-Tetris/master/screenshot/tetris1.jpg" title="Angular Tetris" height="150"/></a>

[https://youtu.be/xD_03mSvV3s](https://youtu.be/xD_03mSvV3s)

## Screenshots

<details closed>
<summary>
<img src="https://raw.githubusercontent.com/joeoregan/Angular-Tetris/master/screenshot/tetris1.jpg" title="Angular Tetris" height="100"/>
<img src="https://raw.githubusercontent.com/joeoregan/Angular-Tetris/master/screenshot/server.png" title="Node.js Server" height="100"/>
<p>Click here for larger images, or individual thumbnails to go to raw images.</p>
</summary>

![Angular Tetris](https://raw.githubusercontent.com/joeoregan/Angular-Tetris/master/screenshot/tetris1.jpg "Angular Tetris")

###### Angular Tetris

![Server](https://raw.githubusercontent.com/joeoregan/Angular-Tetris/master/screenshot/server.png "Node.js Server")

###### Server

</details>

---

## Links

- [Render App](https://tetris-js.onrender.com/ "See App on Render")
- [Original Tutorial (Michael Karen)](https://medium.com/angular-in-depth/game-development-tetris-in-angular-64ef96ce56f7)

---

## Angular Stuff

## GitHub Pages Deploy (Angular 22)

```bash
# from repo root, on master
git checkout master
ng build --configuration production --base-href /Angular-Tetris/
npx angular-cli-ghpages --dir=dist/Angular-Tetris/browser --repo=https://github.com/JoeORegan/Angular-Tetris.git --branch=gh-pages
```

Open: <https://joeoregan.github.io/Angular-Tetris/>

## Local Production Test

```bash
# Git Bash on Windows: prevent / path conversion
MSYS_NO_PATHCONV=1 ng build --configuration production --base-href /
npx http-server ./dist/Angular-Tetris/browser -p 8080
```

Open: <http://localhost:8080>

<details closed>
<summary>Dev, Dependencies, Deploy, Build</summary>

## Development server

Run `npm start` to start a local server at `http://localhost:4200/`.  
The app will automatically reload if you change source files.

## Build

Run `ng build` to build the project.  
The build artifacts are stored in the `dist/` directory.

## Dependencies

This project uses Angular, TypeScript, Node.js and Express.

## Deploy

To deploy, this project uses:

- `server.js`
- `"start": "node server.js"` in `package.json`
- `"build": "ng build"` in `package.json`
- `"engines": { "node": ">=22.22.3", "npm": ">=11.4.1" }` in `package.json`

This project is updated to **Angular 22** ([Angular CLI](https://github.com/angular/angular-cli) 22.1.x).

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/joeoregan/Angular-Tetris)

## Code scaffolding

Run `ng generate component component-name` to generate a new component.  
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

</details>

## Security note

`npm audit` currently reports vulnerabilities from a transitive dev dependency chain (`@angular-devkit/build-angular -> less -> image-size`).  
The project already resolves `image-size@2.0.2` via overrides, and `npm audit fix --force` proposes a breaking/incorrect Angular devkit downgrade.  
This is tracked as an accepted dev-tooling residual risk pending upstream advisory/tooling alignment.

---

<div align="center">

[![GitHub (Main)](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/joeaoregan)
[![GitHub (Games)](https://img.shields.io/badge/GitHub-Games-181717?style=flat&logo=github&logoColor=white)](https://github.com/joeoregan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joeaoregan/)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:joeaoregan@yahoo.ie)

2026 Joe O'Regan

[⬆️ Back to Top](https://github.com/joeoregan/Angular-Tetris)

</div>