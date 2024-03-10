                  ##  MERN Stack 
okay so lets get started for the new project named as inotebook :

Basically we create this app just for the sake of learning and the vision or plan of this app's building is to create such an environment where users can be able to store and retrieve there data/notes, and these are stored in server on the cloud.

here is the organized steps for creating this project :

(1).  We create a Backend folder here in this particular folder, just for the sake of learning and we store our backend stuffs there.
      use commands like :<br>
         #npm init<br>
         #npm i mongoose  
         #npm i express. 

# MONGOOSE: 
 * Mongoose is described as “ elegant MongoDB object modeling for Node.js.” 
   Mongoose is an ODM  (Object Data Modeling) library for MongoDB 
 * MongoDB is a popular NoSQL database, and Mongoose acts as an abstraction layer over it.
 * It provides a schema-based solution for interacting with MongoDB.
 * Think of it as a bridge between your Node.js application and the MongoDB database.

# EXPRESS :

Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.

(2) Creating Routes & Schema for Storing notes & users.

(3) Storing Database using Mongoose model

(4) Adding Data Validation Using express-validator

(5) Creating Thunderclient collections to Manage Requests.

(6) Understanding & implementing Password Hashing, Salt & Pepper, Usage of bcryptjs in Nodejs.

## Hashing passwords using bcrypt in Nodejs

* Simple plain passwords are not secured enough.
* Therefore we use the hash generator method, which converts the simple plain paswords in hashed form.
* And very helpful but not enough.
As those hashed passwords are hacked by the hackers using rainbow table.
* Therefore to overcome that, we use a salting method over the passwords, so that the random texts will be generated and then no hacking will be proceeded by there.


## Token

Types :
(1) Session token
(2) Json web token : Used in this course, described as the way to authenticate the particular user repeatedly.

JWT serves as a very powerful fascinator of solid security & authentication between the server and the client.

To leverage bcryptjs add npm package cld as jsonwebtoken and install it in ur npm package by following the command -->  "npm i jsonwebtoken".

Parts of a token :

(1) ALGORITHM & TOKEN TYPE<br>
(2) Data<br>
(3) Signature

       
 <b>website References</b>  : jsonwebtoken  /  jwt.io

## MIDDLEWARE :

Middleware in React is a third-party extension point between dispatching an action and handing the action off to the reducer. It allows for side effects to be run without blocking state updates. Side effects like API requests can be run in response to a specific action or in response to every action that is dispatched. There can be numerous middleware that an action runs through before ending in a reducer.