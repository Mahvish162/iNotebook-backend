import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const s1={
        "name":"carry",
        "class":"5b"
    }
    const [state,setState]=useState(s1);
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name":"marry",
                "class":"10b"
            })
        },2000)
    }
    return(
        //this syntax exagerates that whenever we wrap any of the stuffs in b/w the NoteContext.provider it encompasses all of its children.
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 