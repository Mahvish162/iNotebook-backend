const express = require('express');
const router = express.Router();
var fetchuser=require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Note = require("../models/Note");

//Route 1: Get all the Notes using GET "/api/notes/getuser",login required.

router.get('/fetchallnotes',fetchuser, async (req, res)=>{
    try {        
    const notes= await Note.find({user: req.user.id})
    res.json(notes);
    
    } catch (error) {
        
    console.error(error);
    res.status(500).json({ error: 'here i got Server error' });
    }
} )

//Route 2: Add a new note using post"/api/notes/addnote",login required.

router.post('/addnote',fetchuser,[
    body('title', "Enter a valid title").isLength({min:3}),
    body('description', "Description must be at least 5 characters").isLength({min:5}),
], async (req, res)=>{
    try {
        const{title,description,tag}=req.body;
    // if there are errors ,return Bad request...
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
   
  }
    const note=new Note({
        title,description,tag,user:req.user.id
    })
    const savedNote=await note.save()
    res.json(savedNote)
  
    } 
    
    catch (error) {        
    console.error(error);
    return res.status(500).json({ error: 'here i got Server error',message:error.message });
   
    }
})

module.exports = router 