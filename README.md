# LollaClone

This is my attempt at recreating Lollapalooza's home page ahead of its 2019 festival.

This is a work in progress, and new features will get added along the way.

The live Lollapalooza Website is here: https://www.lollapalooza.com/
My live clone is here: https://original-nation-140420.firebaseapp.com/

## Features Available Right Now:

The site is a series of components made with Angular.

Core functionality includes: 

##### Landing Page

* A field to sign up for an email list.  Field connects to a firebase database where information is stored. Email validation handled by Angular's default form validation functionality.

* Links to the Tickets, Lineup, and Admin routes.

##### Lineup Page

* This page uses the Ticketmaster API to collect all artists performing at Lollapalooza in 2019. The lineup is initially sorted by headlining acts to least known artists.  Users can also choose to sort alphabetically.

##### Tickets Page

* This is a page that shows ticket prices for Lollapalooza.

##### Admin Page

* Users can navigate here to see all the emails currently added to the database.  Users can also edit these email addresses and delete them from the database.

## Setup and Installation:

#### Cloning From Github

* Clone github repo: https://github.com/samstoia/Cloneapalooza
* Navigate to cloned folder in the command line ($cd Cloneapalooza)
* Once there, type "npm install" to install necessary packages and dependencies.  Process will take a few moments.
* Run "ng serve -o" for a dev server. The app will automatically reload if you change any of the source files.
* Some features won't yet be usable without further setup.  Continue reading for more setup instructions.

#### Ticketmaster API Setup
* You will need a working API Key from Ticketmaster to run this project.
* First, create api keys file in src project folder (From command line in project folder: touch src/api-keys.ts)
* Sign up for Ticketmaster API (free) here: https://developer.ticketmaster.com/
* After signing up, you can find your consumer key by navigating to your "My Apps" page.
* Once you have your key, put this line of code into your api-keys.ts:

>export const apiKey: string = "XXX";

Replace "XXX" with your personal key.

#### Firebase Database Setup
* You will need to setup a free firebase account to use the admin portion of the application.
* make a free account at Firebase's website at http://firebase.google.com/.
* You should then be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.
* You'll then be taken to an "Overview" area. Where you'll be offered three options.
Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Keep the information in this modal.
* You should see a list of information like this:

  apiKey: "XXX",
  authDomain: "XXX.firebaseapp.com",
  databaseURL: "XXX.firebaseio.com",
  storageBucket: "original-nation-140420.appspot.com",
  messagingSenderId: "XXX"

  Your file should have your specific Firebase credentials and other information here, instead of xxxx

* You will now enter the information here into your api-keys.ts file you made while setting up the Ticketmaster API.  Add this code under the Ticketmaster api:

export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

Once again, your credentials should replace any xxxx values.

#### Running Application

* After going through Ticketmaster and Firebase instructions, the site should be fully functional.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Features To Be Added:

##### Landing Page

* Make search bar functional
* Build out more routes and build corresponding components

##### Lineup Page

* Create artist view page so users can see details about artists

##### Tickets page

* Build out functionality for users to go through ticket ordering process

## Built With/Using

* Angular CLI
* TypeScript
* npm
* Ticketmaster API
* Firebase
* karma
* jasmine
* vscode
* webpack

## Authors

| **Sam Stoia** | **GitHub: [samstoia](https://github.com/samstoia)** | **Email: [samstoia@gmail.com](mailto:samstoia@gmail.com)**

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2019 Sam Stoia


## Acknowledgments

[Epicodus](https://www.epicodus.com/).
