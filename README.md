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

##### Tickets Page



## Features To Be Added:



## Setup and Installation:

1. Clone github repo: https://github.com/samstoia/Cloneapalooza
2. Navigate to cloned folder in the command line ($cd Cloneapalooza)
3. Once there, type "npm install" to install necessary packages and dependencies.  You should now be able to edit the code, and see the website by launching a development server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Built With/Using

* Angular CLI
* TypeScript
* karma
* jasmine
* vscode
* webpack
* npm

## Authors

| **Sam Stoia** | **GitHub: [samstoia](https://github.com/samstoia)** | **Email: [samstoia@gmail.com](mailto:samstoia@gmail.com)**

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2019 Sam Stoia


## Acknowledgments

[Epicodus](https://www.epicodus.com/).
