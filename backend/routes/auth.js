
//Those who are facing error after User.create , updated code that helped me resolve the error: 
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');   // bcrypt is used for storing the simple plain text password in hashed form in Nodejs
var jwt = require('jsonwebtoken');

const JWT_SECRET ='Mahvishisagoodg$irl';



// Create a user using POST "/api/auth/createuser",No login required.
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', "Enter a valid Email").isEmail(),
  body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt =await bcrypt.genSalt(10);  //Salting refers to adding random data to a hash function to obtain a unique output which refers to the hash. Even when the same input is used, it is possible to obtain different and unique hashes. 
  const secPass=await bcrypt.hash(req.body.password,salt)  // visit jwt.io
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });
    const data={
      user:{
        id:user.id   // here we use id bcoz data of users have id. so we use any of then makes the same sense.
      }
    }
    const authToken= jwt.sign(data,JWT_SECRET);      // uses the signature method of jwt.io and this returns a promise.
   // console.log(jwtData)  // returns  a token in console.

   // res.json(user);
   
   res.json('authToken :' + authToken)  
   
   // Now this command returns a token and by we can convert that token into the data as described in "data" object above. And by do so we can came to know about all such users those commit the modifications or tempering on the tokens third part i.e. SIGNATURE ,by having commands as jwt.verify(token, secretOrPublicKey, [options, callback]) from jsonwebtoken website & therefore can be in more safer side from any hackings. 
 
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ error: 'Email already exists' });
    }
    console.error(error);
    res.status(500).json({ error: 'here i got Server error' });
  }
});
module.exports = router;



