# JOR Tetris

<p align="left">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <a href="https://tetris-js.onrender.com/">
  <img src="https://img.shields.io/badge/Render-Live%20Demo-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</a>
</p>

![GitHub repo size](https://img.shields.io/github/repo-size/joeaoregan/jor-tetris?color=orange)
![GitHub last commit](https://img.shields.io/github/last-commit/joeaoregan/jor-tetris?color=blue)
![ESLint](https://img.shields.io/badge/Linter-ESLint-4B32C3?style=flat-square&logo=eslint)
![GitHub top language](https://img.shields.io/github/languages/top/joeaoregan/jor-tetris)
![GitHub license](https://img.shields.io/github/license/joeaoregan/jor-tetris)

---

Tetris game in Angular:

- [Play App on Render](https://tetris-js.onrender.com/ "See App on Render")
- [Play App on GitHub Pages](https://joeaoregan.github.io/jor-tetris/ "See App on GitHub Pages")

- CSS added
- Deployment to Render to test Angular app deployment.
- Dependencies updated
- Angular version updated
- Added borders to Tetromino pieces
- High Score
- Flash when lines complete / cleared

---

## Video

<a href="https://youtu.be/xD_03mSvV3s"><img src="https://raw.githubusercontent.com/joeaoregan/jor-tetris/master/screenshot/tetris1.jpg" title="Angular Tetris" height="150"/></a>

[https://youtu.be/xD_03mSvV3s](https://youtu.be/xD_03mSvV3s)

## Screenshots

<details closed>
<summary>
<img src="https://raw.githubusercontent.com/joeaoregan/jor-tetris/master/screenshot/tetris1.jpg" title="Angular Tetris" height="100"/>
<img src="https://raw.githubusercontent.com/joeaoregan/jor-tetris/master/screenshot/server.png" title="Node.js Server" height="100"/>
<p>Click here for larger images, or individual thumbnails to go to raw images.</p>
</summary>

![Angular Tetris](https://raw.githubusercontent.com/joeaoregan/jor-tetris/master/screenshot/tetris1.jpg "Angular Tetris")

###### Angular Tetris

![Server](https://raw.githubusercontent.com/joeaoregan/jor-tetris/master/screenshot/server.png "Node.js Server")

###### Server

</details>

---

## Links

- [Render App](https://tetris-js.onrender.com/ "See App on Render")
- [Original Tutorial (Michael Karen)](https://medium.com/angular-in-depth/game-development-tetris-in-angular-64ef96ce56f7)

---

## Angular Stuff

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

To deploy to Heroku the following is required in `package.json` along with the `server.js` file

`"start": "node server.js"` \
`"scripts": { "heroku-postbuild": "ng build --prod" }` \
`"engines": { "node": "v22.16.0", "npm": "11.4.1" }`

This project was updated to Angular 21 [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/joeaoregan/jor-tetris)

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
