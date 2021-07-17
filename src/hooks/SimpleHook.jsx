import React, {useState}  from "react";

import "./SimpleHook.css";
// import { useState } from "react";





const SimpleHook = ()=>{
    
    const [newclick, UpdateClickState] = useState(0)

    const UpdateClick = () =>{
        console.log(newclick)
        UpdateClickState(newclick+1)
    }
    return (
    <>
    <div className="main_hook">
        <h3> {newclick} </h3>
        <button onClick={UpdateClick}>Click Me</button>
    </div>
    </>    
    )
}


export default SimpleHook;