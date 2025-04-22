# NgDemo - Angular Test with Jest

En este ejemplo mostramos como usar Jest en Angular.

## Project generation

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Guía para instalar Jest

### 1. Removemos las referencias a Jasmine y Karma

```shell
npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

### 2. Instalamos Jest

```shell
npm i -D jest jest-preset-angular @types/jest
```

### 3. Creamos un archivo de config para Jest (En este caso config.jest.ts)

### 4. Colocamos esto dentro de config.jest.ts

```ts
import { setupZoneTestEnv } from "jest-preset-angular/setup-env/zone";

setupZoneTestEnv();
```

### 5. Y agregamos el objeto Jest en nuestro package.json

```json
"jest": {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/config.jest.ts"
  ],
  "moduleNameMapper": {
    "@app/(.)": "<rootDir>/src/app/$1",
    "@src/(.)": "<rootDir>/src/$1"
  }
}
```

### 6. Reemplazar el archivo tsconfig.spec.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest" // Antes iba "jasmine"
    ]
  },
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

### 7. Reemplazar el scrip de test en el package.json

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "jest",
  "test:w": "jest --watch",
  "test:c": "jest --coverage",
},
```
