# Stonewall Wears

#### Angular/Firebase e-commerce site, 2.1.2019

#### By Kristin Brewer-Lowe

## Description

This is an e-commerce site where users can browse products and add them to their cart. Users can log-in with their Google account to save their cart for later. This project was first started as an independent project at Epicodus as a challenge to recreate an existing site. I chose http://www.revelandriot.com/ as my inspiration.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

![Site Demo](src/assets/images/stonewallwearsdemo.gif)

## Site Plan
- Header component (complete)
- Footer component (complete)
- Authentication (complete)
- Homepage component (complete)
- What We Do component (complete)
- Shop component (complete)
  - Pipe to sort by category (complete)
  - Individual product component (complete)
    - Add to cart select color, size, quantity (complete)
  - Cart component (complete)
    - Delete items (complete)
- Resources component (complete)
  - Individual resource view component (complete)
- Contact component (complete)
- Action component (complete)

Models
- Product model (complete)
  - Name: string
  - Price: number
  - Colors: string[]
  - Sizes: string[]
  - Info: string
  - Category: string
  - Images: string[]
- Resource model (complete)
  - Title: string
  - Content: string
  - Image: string

## Future features
* Allow guests to add to cart and checkout.

## Local development dependencies

To clone this project and run it locally, you must first create a Firebase account. Create an api-keys.ts document stored in src/app/api-keys, and add your account credentials like this:

export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

Add /src/app/api-keys.ts to your .gitignore file. You can seed your database by importing sample-products.json into your Firebase database:
* Visit your Firebase Console and select your project's database.
* Click on the Database option in the left-hand navigational menu.
* Select the 3 vertical dots on the right-hand side of the grey bar with your database URL on it. (It's right next to the + and - buttons). This should bring up a small menu.
* Select Import JSON from this menu. This will result in a modal window prompting you to upload a file.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Support and Contact Details

If you discover a bug or would like to make a suggestion, email me at kristin.lowe1@gmail.com.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used

Angular, Firebase, Firebase Authentication and Typescript.

### License

Copyright (c) 2019 **Kristin Brewer-Lowe**

This software is licensed under the MIT license.
