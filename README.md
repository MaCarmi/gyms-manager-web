# GymsManagerWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Descrizione applicazione

Questa applicazione ha lo scopo di gestire una lista di palestre, definite con il modello https://github.com/simeraro1/gyms-manager-web/blob/ebee16cc8c7f0ab649c926d54eadb75e25a732d9/src/app/shared/models/gym.model.ts, l'applicazione si appoggia su di un server back-end che espone delle REST API per effettuare delle operazioni CRUD su tale entità.
L'applicazione fa largo uso della libreria Angular Material, (vedi docs ufficiale), attualmente è composta di un'unica vista chiamata "gyms.component.ts" dove vengono listate tutte le palestre restituite dalla chiamata GET dedicata, in più viene visualizzato un BOX che permette l'inserimento di una nuova palestra. 
La funzionalità di DELETE è già implementata e usufruibile tramite l'apposita icona "trash" presente su ogni card "palestra".
Per maggiori dettagli leggere i commenti nel codice sorgente.
