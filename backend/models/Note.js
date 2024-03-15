const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,                // this line means that we r fetching the id of another model in this particular model mongoose ,here that another model is User.js, so basically we r fetching the id of users that have entry in the User.js,  works as a FORIEGN KEY....
        ref:'user'
    },
     title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('notes', NotesSchema);