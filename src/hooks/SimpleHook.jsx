import React, {useState}  from "react";

import "./SimpleHook.css";
// import { useState } from "react";



const SimpleHook = ()=>{
 
    return (
    <>
    <div className="main_hook">
        
        <button onClick={IncNum}>Click Me</button>
    </div>
    </>    )
}


export default SimpleHook;