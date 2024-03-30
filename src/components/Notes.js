//rafce
import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Notesitem from './Notesitem';


const Notes = () => {
    const context=useContext(noteContext);
    const {notes,setNotes}=context;         // destructuring and setting up the values of notes + setNotes as context,
  return (
    <div>
       <div className="row my-3">
      <h1>Your Notes</h1>
      {notes.map((note)=>{        // using maps 
        return <Notesitem note={note}/>;
      })}
    </div>
 
    </div>
  )
}

export default Notes
