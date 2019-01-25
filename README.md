# SiteRebuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Site Plan
- Header (repeated header component on each page)
- Footer (repeated footer component on each page)
- Homepage (homepage component)
  - What We Do (what we do component)
  - Shop (list all component)
    - Pipe to sort by T-Shirts, Tanks, Sweatshirts, Accessories, Sale
      - Individual product page (component)
        - Add to cart select color, size, quantity (component)
    - Cart (list component)
      - Delete items (component)
      - Update item color, size, quantity (component)
  - Resources (list all component)
    - Individual resource view component
  - Visuals (component)
  - Contact (component)
  - Action (component)

  Models
  - Product model
    - Name: string
    - ID: string
    - Price: number
    - Colors: string[]
    - Sizes: string[]
    - Info: string
    - Category: string
    - Sale: boolean 
  - Resource model
    - Title: string
    - Content: string
    - Thumbnail: string

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
