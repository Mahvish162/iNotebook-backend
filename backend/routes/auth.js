/*
const express = require('express');
const User = require('../models/User');
const router = express.Router();

const { body, validationResult } = require('express-validator'); 


// Create a User using: POST "/api/auth/". Doesn't require Auth

// adding validation layer in the inotebook
router.post('/',[
    body('name','enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','enter a valid password').isLength({min:5}),

], (req, res)=>{ 
    const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.send(`Hello,${req.query.person}!`);
   // return res.status(400).json({errors:errors.array()});
}

  res.send({ errors: result.array() });

  User,create({
    name:req.body.name,
    password:req.body.password,
    email:req.body.email,
  }).then(user => res.json(user));
    
})

module.exports = router

*/


//Those who are facing error after User.create , updated code that helped me resolve the error: 

const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a user using POST "/api/auth/ceateuser", doesn't require authentication, No login required 
router.post('/', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', "Enter a valid Email").isEmail(),
  body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // check whether the user with this email exists already.....
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    res.json(user);
  } 
  // If there are errors, return Bad request and the errors
  catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ error: 'Email already exists bachha' });
    }
    console.error(error);
    res.status(500).json({ error: 'Please enter a unique value',message:error.message });
  }
});

module.exports = router;




