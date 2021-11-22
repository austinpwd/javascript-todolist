# A To-Do List Web App by Austin Doan.

This application was made using rudimentary JavaScript and components, and a medium amount of CSS (relative to its previous state). The UI was heavily redesigned after receiving feedback.

## Install
 In order to run the web app, you will need to install the projects node_modules by running ```npm install```

## Build
You will need to build the web application by running ```npm run build```

## Deployment
You can start a local instance of the web application by running ```npm start```

By default, the instance will bind to ```localhost:1234```. There is an already deployed instance available to view at **<https://austinpwd-todo-app.netlify.app>**

# Intention and Functionality.

The intention of this application is to showcase asynchronously fetching data from a JSON file, converting the data from JSON format into String format and then loading that data into an array, and display the output of the array to the user within a To-Do List structure. It has been further developed, enabling Add, Edit, and Remove functionality to the To-Do List items. All changes to the List are currently not persistent, and will be undone once the web app has been unloaded.

This project prominently features __routing with single-page content loading__. It takes advantage of the __Parcel__ module bundler, which implements several optimizations such as tree-shaking and minification. The bundled ```index.js``` is dynamically compiled, allowing for the assets of the project, such as images, to be optimized and bundled.

The data that is displayed to the user in this project is parsed from a JSON file. A feature of this project is the asynchronous fetching of this JSON file. The application implements the relatively new __async function__ and the __await keyword__, which was added in ECMAScript 2017.

This app now features a CRUD implementation, allowing the user to manipulate the data. It gives the ability to add, edit, and remove from an array. The design and functionality is inspired by the __React Redux library__. Changes to the array or *state* are currently not persistent due to time constraints.

### The project consists of six pages. 

1. A main __home__ page, which is used as somewhat of a splash screen to direct the user to the other pages.

2. A __To-Do__ page, which the user gets directed to via the home page by use of a Router.

3. A __Add To-Do__ page, allowing the user to create more To-Dos. It employs the use of an array, with an interaction layer to add items. The design and function is inspired by the React Redux library.

3. A __Edit To-Do__ page, enabling the user to modify any existing To-Dos that are currently stored in the previously mentioned array. 

3. A __Remove To-Do__ page, giving the user the ability to remove any existing To-Dos.

3. A __404 Not Found__ page, which is displayed to the user if they enter a path name that is not routable. The page displays the error as well as a link back to the main home page.