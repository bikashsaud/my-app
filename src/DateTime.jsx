import React from 'react';


const main = {
    margin:"200px 300px 200px 400px",
    backgroundColor:"rgb(189, 255, 223)",
    color: "Blue",
    width: '500px',
    height:'90px',
    paddingTop: '26px',
    borderRadius: '10px',
}
const text_main = {
    backgroundColor:"rgb(189, 255, 223)",
    color: "rgb(245, 149, 149)",
    backgroundColor:"rgb(189, 255, 223)",

}
var currentTime = new Date().getHours();
let greeting = '';
let grMr


function  DateTime() {   

if(currentTime>0 && currentTime<12){
    greeting = "Good Morning";
     grMr = {
        color: "green"
    }
}
else if(currentTime>12 && currentTime<18){
    greeting = "Good Afternoon";
     grMr = {
        color: "brown",
    }
}
else if(currentTime>18 && currentTime<24){
    greeting = "Good Night";
     grMr = {
        color: "black"
    }
};
 console.log(greeting)

return(
     <div >
       <h2 style={main}> Greeting: Hello Sir, <span style = {grMr, {backgroundColor:"rgb(189, 255, 223)"}}> {`${greeting}`} </span></h2> 
    </div>
    );

}

export default DateTime;