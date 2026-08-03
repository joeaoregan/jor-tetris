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

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=flat-square&logo=reactivex&logoColor=white)
![ESLint](https://img.shields.io/badge/Linter-ESLint-4B32C3?style=flat-square&logo=eslint)
![GitHub top language](https://img.shields.io/github/languages/top/joeoregan/Angular-Tetris)
![Responsive](https://img.shields.io/badge/UI-Responsive-0A8F08?style=flat-square)
![Vulnerabilities](https://img.shields.io/badge/Vulnerabilities-0-brightgreen)

![GitHub repo size](https://img.shields.io/github/repo-size/joeoregan/Angular-Tetris?color=orange)
![GitHub last commit](https://img.shields.io/github/last-commit/joeoregan/Angular-Tetris?color=blue)
![Stars](https://img.shields.io/github/stars/joeoregan/Angular-Tetris?style=social)

---

Tetris game in Angular:

- [Play App on Render](https://tetris-js.onrender.com/ "See App on Render")
- [Play App on GitHub Pages](https://joeoregan.github.io/Angular-Tetris/ "See App on GitHub Pages")

- CSS added
- Deployment to Render to test Angular app deployment.
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

## GitHub Pages Deploy (Angular 21)

```bash
# from repo root, on master
git checkout master
ng build --configuration production --base-href /Angular-Tetris/
npx angular-cli-ghpages --dir=dist/Angular-Tetris/browser --repo=https://github.com/JoeORegan/Angular-Tetris.git --branch=gh-pages
```

Open: <https://joeoregan.github.io/Angular-Tetris/>

## Local Production Test

```bash
ng build --configuration production --base-href /
npx http-server ./dist/Angular-Tetris/browser -p 8080
```

Open: <http://localhost:8080>


<details closed>
<summary>Dev, Dependencies, Deploy, Build</summary>

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. \
The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. \
Use the `--prod` flag for a production

## Dependencies

This project has the following dependencies: express, path, angular

- `npm install express  --save`
- `npm install @angular/cli@latest @angular/compiler-cli --save-dev`
- `npm install express path --save`

## Deploy

To deploy, the following is required in `package.json` along with the `server.js` file:

`"start": "node server.js"` \
`"scripts": { "build": "ng build" }` \
`"engines": { "node": "v22.16.0", "npm": "11.4.1" }`

This project was updated to **Angular 21** ([Angular CLI](https://github.com/angular/angular-cli) version 21.2.3).

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/joeoregan/Angular-Tetris)

## Development server

Run `ng serve` for a dev server. \
Navigate to `http://localhost:4200/`. \
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. \
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. \
The build artifacts will be stored in the `dist/` directory. \
Use the `--prod` flag for a production build.

</details>

<details closed><summary>Tests</summary>

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

</details>

<details closed>
<summary value="test">Angular Stuff</summary>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

</details>

---

<div align="center">

[![GitHub (Main)](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/joeaoregan)
[![GitHub (Games)](https://img.shields.io/badge/GitHub-Games-181717?style=flat&logo=github&logoColor=white)](https://github.com/joeoregan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joeaoregan/)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:joeaoregan@yahoo.ie)

2026 Joe O'Regan

[⬆️ Back to Top](https://github.com/joeoregan/Angular-Tetris)

</div>
