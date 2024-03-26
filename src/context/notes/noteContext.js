import { createContext } from "react";    // very first just import the createContext from react.

const noteContext=createContext(); // syntax to create a new context

// every state related to the notes are filled here as to give access to all those components of these states no matter how much down the components lie in the heirarchy.... 

export default noteContext;
 
// this file/directory only gives this much of details that  ~ we ask to react that we want to leverage the context api & to fulfill our request REACT tells us to use the above syntax in order to leverage context api;