# Mastermind

#### Angular e-commerce site, 2.1.2019

#### By Kristin Brewer-Lowe

## Description

This is an e-commerce site where users can browse products and add them to their cart. This project was first started as an independent project at Epicodus as a challenge to recreate an existing site. I chose http://www.revelandriot.com/ as my inspiration.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Site Plan
- Header (repeated header component on each page) - complete
- Footer (repeated footer component on each page) - complete
- Homepage (homepage component) - component added but missing content
  - What We Do (what we do component) - complete
  - Shop (list all component) - complete
    - Pipe to sort by T-Shirts, Tanks, Sweatshirts, Accessories, Sale - complete
    - Individual product page (component) - complete
      - Add to cart select color, size, quantity (component)
    - Cart (list component)
      - Delete items (component)
      - Update item color, size, quantity (component)
  - Resources (list all component) - complete
    - Individual resource view component - complete
  - Contact (component) - complete
  - Action (component) - complete

  Models
  - Product model - complete
    - Name: string
    - ID: string
    - Price: number
    - Colors: string[]
    - Sizes: string[]
    - Info: string
    - Category: string
    - Sale: boolean
    - Images: string[]
    - Featured: boolean
  - Resource model - complete
    - Title: string
    - Content: string
    - Image: string

## Development Dependencies

To clone this project and run it locally, you must first create a Firebase account. Create an api-keys.ts document stored in src/app/api-keys, and add your account credentials like this:

export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

Add this file to your .gitignore file (/src/app/api-keys.ts).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Support and Contact Details

If you discover a bug or would like to make a suggestion, email me at kristin.lowe1@gmail.com.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used

Angular, Firebase, Firebase Authentication and JavaScript.

### License

Copyright (c) 2019 **Kristin Brewer-Lowe**

This software is licensed under the MIT license.
