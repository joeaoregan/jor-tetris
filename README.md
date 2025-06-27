Tetris game in Angular:

- [Play App on Render](https://tetris-js.onrender.com/ "See App on Render")
- [Play App on GitHub Pages](https://joeaoregan.github.io/jor-tetris/ "See App on GitHub Pages")

---

# JOR Tetris

![Angular Tetris](https://raw.githubusercontent.com/joeaoregan/jor-tetris/master/screenshot/tetris1.jpg "Angular Tetris")

![Server](https://raw.githubusercontent.com/joeaoregan/jor-tetris/master/screenshot/server.png "Node.js Server")

###### Angular Tetris

---

Only CSS added, and deployment to Heroku to test Angular app deployment.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production

## Dependencies

This project has the following dependencies: express, path, angular

`npm install express  --save`
`npm install @angular/cli@latest @angular/compiler-cli --save-dev`
`npm install express path --save`

## Deploy

To deploy to Heroku the following is required in `package.json` along with the `server.js` file

`"start": "node server.js"`
`"scripts": { "heroku-postbuild": "ng build --prod" }`
`"engines": { "node": "~10.16.2", "npm": "~6.9.0" }`

## links

- [Play on Heroku](https://jor-tetris.herokuapp.com/)
- [Original Tutorial (Michael Karen)](https://medium.com/angular-in-depth/game-development-tetris-in-angular-64ef96ce56f7)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
