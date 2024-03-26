## Here we r gonna connect the Backend with the Frontend & do the changes in frontend ,

* So for the very first,
* Add/open two terminals, one for frontend & other for backend. 

* Add some line of codes in package.json if frontend & backend also..
* Adding the below lines inside script of frontend:

> "server": "nodemon server.js",

>"both": "concurrently \"npm run start\" \"cd backend && npm run server\""  

& this to the backend :

 > "server":"nodemon index.js"

 Now run the code by using the command "npm run both".

 - Now we just add the bootstrap links of JS & CSS in the code for styling purpose.... 
 
## CONTEXT API :
 At its core, the Context API is a mechanism that allows you to share specific information (like state or functions) with multiple components, eliminating the need for prop drilling.

The React Context API is a powerful tool for efficient state management, offering a cleaner alternative to prop drilling and enhancing overall code organization.

![^](image.png)

 >> HOW TO USE CONTEXTAPI:

 here in the code of iNotebook we have, like very initial step of creating context is :

 1. Creating a context with the help of react using the particular syntax, as mentioned in the noteContext.js directory.For more detailed explanation of this step refer the particular directory.

 2. Now we can leverage the above context in any of the components state,we create state for that so that state can be accessible to everyone very easily, as done in NoteState.js directory,For more detailed explanation of this step refer the particular directory.
