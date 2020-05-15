# How to Run this Prototype

## Double Check if Necessary Tools are Installed

In order to run this prototype, a few things must be installed.
- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

To check if these tools are installed, run the following commands in the command line:
```
$ node -v
$ npm -v
```
*I have v12.16.2 and v6.14.4 running on my local machine for node and npm, respectively.*

## Setting up the Codebase

**Download** or **Fork** the repository to get access to the codebase. This can be done through [Github](https://github.com/julianryorex/gmaps).

Once downloaded, you will see a structure similar to this one below:

```
client
└───public
└───selenium-test
└───src
    └───assets
    └───components
    └───App.js
    └───...
└───.gitignore
└───package.json
└───package-lock.js
└───README.md
.gitignore
README.md
```

Change into the client directory (react directory and run the following command:

```
npm i 
```

This will install all the dependencies for React as well as Google Maps and other third party modules.
Once installed, you will see a `node_module` folder somewhere right above `/client/public/`. You are now ready to start the prototype!

## Start the Web App

Navigate inside the client folder: 

```
$ cd client
```

Run the following command: 

```
npm start
```

If all goes well, the dev server will spin up on your local machine and it will be displayed on `localhost:3000`. If it does not automatically direct you to that URL, input that link into your preferred browser.

## NOTE:
To test out the fetch API, please refer to the `Markers.js` file located in 

```
/client/src/components/marker/Markers.js
```

More documentation can be found in `Markers.js`.