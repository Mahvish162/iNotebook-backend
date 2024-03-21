const express = require('express');
const router = express.Router();
var fetchuser=require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Note = require("../models/Note");
const { getByPlaceholderText } = require('@testing-library/react');

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


//Route 3: Update an existing note using put"/api/notes/updatenote",login required.


router.put('/updatenote/:id ',fetchuser, async (req, res)=>{
    const {title,description,tag}=req.body;
   
   try {
    
    //creating a newNote object 
    const newNote={};
    if(title){newNote.title=title};                              // Updating the title
    if(description){newNote.description=description};            // Updating the decsription
    if(tag){newNote.tag=tag};                                   // Updating the tag

    // Find the note to be updated and then update it : 
    let note =await Note.findById(req.param.id);

    if(!note){return res.status(404).send("Not Found")};     //if note not found then return "Not found"

      // checking that if the user is same who's trying to login with the credentials & to the user whose note it actually is....
      // note.user.toString() ~~~~ id of this note
      // req.user.id ~~~~ id of the user trying to logged in
      if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
      }      

      // Now all the conditions satisfied with the existence of note

      note = await Note.findByIdAndUpdate(req.params.id,{$set : newNote},{new : true})         //  {new : true} ~~~ new content will be accepted or updated.

      return res.json({note});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'here i got Server error',message:error.message });
     
    }
})
/*

router.put("/updatenote/:id", fetchuser, async (req, res) => {
    try {
      // getting the id from the getuser middleware
      const id = req.user.id;
      // getting note id to modify the node.
      const noteId = req.params.id;
      if(!noteId){return res.status(404).send("Not Found")};
      // Modifying notes with verification checking if the userId of notes matches with the id of the user so that the one who created the note can only modify the notes.
      const checkNoteOwner = await Note.findOne({ id: noteId, userId: id });
  
      if (!checkNoteOwner) {
        return res.status(401).send("Not Allowed.");
      }
      const updatedNote = await Note.findByIdAndUpdate(
        noteId,
        {
          title: req.body.title,
          description: req.body.description,
          tag: req.body.tag,
        },
        { new: true }
      );
      // new true brings new updated data from the mongo db not the old one in res.
      return res.json({updatedNote});
    } catch (error) {
      return res.status(500).send("Internal Server Error.");
    }
  });
*/



//Route 4: Delete an existing note using delete"/api/notes/deletenote",login required.


router.delete('/deletenote/:id ',fetchuser, async (req, res)=>{
   
  try {  
  // Find the note to be deleted and then delete it : 
  let note =await Note.findById(req.param.id);

  if(!note){return res.status(404).send("Not Found")};     //if note not found then return "Not found"

    // checking that if the user is same who's trying to login with the credentials & to the user whose note it actually is....
    // note.user.toString() ~~~~ id of this note
    // req.user.id ~~~~ id of the user trying to logged in
    //Allow deletion only if user owns this Note.
    if(note.user.toString() !== req.user.id){
          return res.status(401).send("Not Allowed")
    }      

    // Now all the conditions satisfied with the existence of note

    note = await Note.findByIdAndDelete(req.params.id)
    return res.json({"Success" : "Note has been delete", note : note});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'here i got Server error',message:error.message });
   
  }
})
module.exports = router 