import React from 'react';
// import reactDom from 'react-dom';
import Heading from './Heading';
import Body from './Body';
import { func } from 'prop-types';
import DateTime from './DateTime';


// import other values with default as here
// default bahek wala lae {yo bhitra lekhne}


// method 1 to import
import Name, {address, SendSchool, Campus} from './DefaultImport'; 

// method 2 to import this method in not widly used.
// import * as info from "./DefaultImport";



function App() {
    return(
    <>
    {/* <Heading/>
    <Body/> */}
    {/* <DateTime /> */}
    <>
    <ol>
        
        <li>Default Import:</li>
        
        {/* Method to import by using *; not widly used */}
        {/* default Name lae default garne */}
        {/* <li>{info.default}</li> 
        <li>{info.address}</li>
        <li>{info.Campus()}</li> */}
        {/* <li> <info.SendSchool /> </li> */}


        {/* Method1 for import one by one */}
        <li>{Name}</li> 
        <li>{address}</li>
        <li>{Campus()}</li> 
        <li>{SendSchool()}</li> 

    </ol>
    </>
    </>
    );
}

export default App;