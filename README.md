# Manhattan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Generic Dialog component
There is incl. reusable component code is in src/app/confirm-dialog. The is a titel and content text of the box impl. as parameter for the dialog-confirm.component in confimr-dialog.model.ts. User of the dialog comp. can imple their own event event listners on top of afterClosed(); Styleing can be use to define size and position etc.

Example of impl. is in slots-detail coponent when edit a slot and the user want to save. To get there from the main page click upon one of the slots lines of the table and the details view appear. Enter new detalins and press save - confirm dialog appears press yes and the update will be execute. For test purpose "console.log" is applied.
http://localhost:4200/slot/slot-detail/11

A example of style the confirm box different can be seen http://localhost:4200/slots and pressing "open dialog" button - this is not a full implemtation but loking in the console you'll the result of the doStuff method. 

## Running ng lint

Run `ng lint` to execute the code formatter console, and perhaps execute as a part of you build serve to keep code in sharpe. TODO update to Eslint in next version.

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
