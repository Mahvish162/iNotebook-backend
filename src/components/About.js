import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'


const About = () => {
  const a=useContext(noteContext)   //using the imported notecontext
  useEffect(()=>{
    a.update()
  },[])
  return (
    <div>
      This is about {a.state.name} & this class is belongs to {a.state.class}    
    </div>
  )
}

export default About
