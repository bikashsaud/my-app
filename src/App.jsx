import React, {useState} from 'react';
import SimpleHook from './hooks/SimpleHook'

const App = () =>{
        let ftime = new Date().toLocaleTimeString();
        const [newtime, CurrTime] = useState(ftime)
    
        const UpdateTime = () =>{
            CurrTime(new Date().toLocaleTimeString())
        }
        setInterval(UpdateTime, 1)
    return (<>
        <h4 style = {
            {textAlign:"center"}
        }>{newtime}</h4>

    <SimpleHook />
    </>);
}

export default App; 


