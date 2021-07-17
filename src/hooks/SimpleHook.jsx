import React, {useState}  from "react";

import "./SimpleHook.css";
// import { useState } from "react";



const SimpleHook = ()=>{
    
    // Array structuring anad dstructuring

    const names = ['hari', 'biksh', 'ram', 'radha'];

    // destructuring it;
    const [h, b, r, rd] = names;
    // console.log(h,b,r,rd, 909090);


    const state = useState(2);
    // use state ma 2 paramiters hunxan first hamle use state ma default diyeko like useState(1) first val=1

    const [click, countClick] = useState(0);
    // const [click, countClick] = useState(new Date().toLocaleString());

    //NOTE: VERY IMPt. if countClickbhanne function call garda yasle return garne value nae current click value hunxa and click initial value == countclick value 

    // console.log(click, countClick,890890)

    
    // let click = 1;
    const IncNum = () =>{
        countClick(click+1)
        // countDate(new Date().toLocaleString())
    };
    return (
    <>
    <div className="main_hook">
        <h3> {click} </h3>
        <button onClick={IncNum}>Click Me</button>
    </div>
    </>    )
}


export default SimpleHook;