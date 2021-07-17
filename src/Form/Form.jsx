import React, {useState} from 'react';


import "./Form.css";



const SimpleForm = ()=>{
    // let newText;
    const [newText, SetText] = useState();
    const [newNameText, setNameText] = useState();

    const InputEventHandle = (val) => {
        SetText(`${val.target.value}`);
    }
    const OnSubmit = () => {
        setNameText(newText)
    }

    return (
        <div className='main_form'>
            <h1>Hello <span>{newNameText} </span> </h1>
            <input type="text" placeholder="Enter Your Input" defaultValue="" onChange={InputEventHandle} value={newText}/> <br />
            {/* newText ma value store hunxa jo onchange event le garda janxa  */}
            <button onClick={OnSubmit}>Submit</button>
            {/* jaba onclick hunxa hamle onsubmt function se garxau and newtext ma bhako data lae newNameText ma rakhi dinxua and  tyo lae hami hello paxi dekhauxau  */}
        </div>
    )
}


export default SimpleForm;
