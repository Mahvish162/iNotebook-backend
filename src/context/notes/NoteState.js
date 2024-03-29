
import NoteContext from "./noteContext";

const NoteState=(props)=>{
     
    return(
        //this syntax exagerates that whenever we wrap any of the stuffs in b/w the NoteContext.provider it encompasses all of its children.
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 