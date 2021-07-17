import React, {useState}  from "react";

import "./SimpleHook.css";
// import { useState } from "react";



const SimpleHook = ()=>{

    const base = "teal"  
    const [colorBase, changeBase] = useState(base)
    const [newText, UpdateText] = useState('Click Me 👆')
    const bgButton = ()=> {
        changeBase('blue');
        UpdateText('Outch!! 😫 ') 
        
    }

    const bg2Click = () =>{
        changeBase('teal')
        UpdateText('Ayyoo!!! 😠')
    }

    return (
    <>
    <div className="main_hook" style = { { backgroundColor: colorBase}}>
        <button onDoubleClick={bg2Click} onClick={bgButton}> {newText} </button>
    </div>
    </>    )
}


export default SimpleHook;