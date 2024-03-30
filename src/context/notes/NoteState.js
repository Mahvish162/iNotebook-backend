
import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{
     
    const notesInitial=
        [
            {
              "_id": "65f3b885e4b232dbc303ffb6",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "My title",
              "description": "Pleaeghab zmv bzvx hgx xgs xvh xgbhxzv ",
              "tag": "personal",
              "date": "2024-03-15T02:55:01.413Z",
              "__v": 0
            },
            {
              "_id": "65f3bc864abd8f7155fc4f61",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "Alisha's diary",
              "description": "Daily journaling of alisha ",
              "tag": "personal",
              "date": "2024-03-15T03:12:06.378Z",
              "__v": 0
            },
            {
              "_id": "65f3b885e4b232dbc303ffb6",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "My title",
              "description": "Pleaeghab zmv bzvx hgx xgs xvh xgbhxzv ",
              "tag": "personal",
              "date": "2024-03-15T02:55:01.413Z",
              "__v": 0
            },
            {
              "_id": "65f3bc864abd8f7155fc4f61",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "Alisha's diary",
              "description": "Daily journaling of alisha ",
              "tag": "personal",
              "date": "2024-03-15T03:12:06.378Z",
              "__v": 0,
            },
            {
              "_id": "65f3b885e4b232dbc303ffb6",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "My title",
              "description": "Pleaeghab zmv bzvx hgx xgs xvh xgbhxzv ",
              "tag": "personal",
              "date": "2024-03-15T02:55:01.413Z",
              "__v": 0,
            },
            {
              "_id": "65f3bc864abd8f7155fc4f61",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "Alisha's diary",
              "description": "Daily journaling of alisha ",
              "tag": "personal",
              "date": "2024-03-15T03:12:06.378Z",
              "__v": 0
            },
            {
              "_id": "65f3b885e4b232dbc303ffb6",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "My title",
              "description": "Pleaeghab zmv bzvx hgx xgs xvh xgbhxzv ",
              "tag": "personal",
              "date": "2024-03-15T02:55:01.413Z",
              "__v": 0,
            },
            {
              "_id": "65f3bc864abd8f7155fc4f61",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "Alisha's diary",
              "description": "Daily journaling of alisha ",
              "tag": "personal",
              "date": "2024-03-15T03:12:06.378Z",
              "__v": 0
            },
            {
              "_id": "65f3b885e4b232dbc303ffb6",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "My title",
              "description": "Pleaeghab zmv bzvx hgx xgs xvh xgbhxzv ",
              "tag": "personal",
              "date": "2024-03-15T02:55:01.413Z",
              "__v": 0,
            },
            {
              "_id": "65f3bc864abd8f7155fc4f61",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "Alisha's diary",
              "description": "Daily journaling of alisha ",
              "tag": "personal",
              "date": "2024-03-15T03:12:06.378Z",
              "__v": 0
            },
            {
              "_id": "65f3b885e4b232dbc303ffb6",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "My title",
              "description": "Pleaeghab zmv bzvx hgx xgs xvh xgbhxzv ",
              "tag": "personal",
              "date": "2024-03-15T02:55:01.413Z",
              "__v": 0,
            },
            {
              "_id": "65f3bc864abd8f7155fc4f61",
              "user": "65f3b79be4b232dbc303ffb4",
              "title": "Alisha's diary",
              "description": "Daily journaling of alisha ",
              "tag": "personal",
              "date": "2024-03-15T03:12:06.378Z",
              "__v": 0
            }
          ]
    const [notes,setNotes]=useState(notesInitial)
    return(
        //this syntax exagerates that whenever we wrap any of the stuffs in b/w the NoteContext.provider it encompasses all of its children.
        <NoteContext.Provider value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 