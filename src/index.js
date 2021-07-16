// var React = require('react');
// var ReacrDom = require('react-dom');

import React from "react";
import ReactDOM from "react-dom"; 
import App from "./App";


// external css;

import './index.css';



// stntex
// ReacrDom.render('k dekhaune', 'kaha dekaune', 'call back garne')
// 

// pure js
// this is same as above "ReactDOM.render(<h1> Hello Bikash!! !</h1>, document.getElementById("root"));" using js

// var h1 = document.createElement('h1');
// h1.innerHTML = "React App---> ";
// document.getElementById("root").appendChild(h1);


// first way anu  udes way 

// ReactDOM.render(<div> <h1> Hello Bikash!! !</h1> <h2> hi, how are you...</h2> </div>, document.getElementById("root"));
// ReactDOM.render([ <h1> Hello Bikash!! !</h1>, <h2> hi, how are you...</h2>,], document.getElementById("root"));// if you don't want to wrape elements into one anothr parent tag then you also use list or arraye by seperating elements by comma like this

//use react.Fragment or <></>
// ReactDOM.render(<React.Fragment> <h1> Hello Bikash!! !</h1> <h2> hi, how are you...</h2> </React.Fragment>, document.getElementById("root"));
// // or
// ReactDOM.render(<>
//      <h1> Hello Bikash!! 5 top Netflix Series... </h1>
//      <p>Here, my best 5 picks </p>
//      <ol>
//          <li>1. Dark</li>
//          <li>2. Money Heist </li>
//          <li>3. Loki</li>
//          <li>4. Captain America </li>
//          <li>5. Wanda Vision </li>

//      </ol>
//      </>, document.getElementById("root"));


// react js expression

// const flname = "Bikash Saud";
// const address = "Baitadi Nepal"
// ReactDOM.render(
//     <>
//         <h1>
//             My Introduction:
//         </h1>
//         <h2> 1. Name: {flname}  </h2>,
//         <h2> 2. Address: {address}  </h2>,
//         <h2> 3. Sum of 3*3 :{3*3}  </h2>,
//         <h2> 4. Random no: {Math.random()   } {address}  </h2>,


//     </>,
//     document.getElementById("root")
// )


// literal in jsx: #######
// const fname = "bikas";
// const lname = "Saud";
// var cd = new Date().toLocaleDateString();
// var ct = new Date().toLocaleTimeString();

// reactDom.render(
//     <>
//     <h4>
//         {/*  for concatination  */}
//     My name is : {fname + " " + lname}
//     </h4>
//     {/* template lterales remove this thing by using as belod */}
//     <h4>
//        {` My first name is  ${fname} and last name is ${lname}. `}


//     </h4>
//     <h5>Current Date: {cd} </h5>
//     <h5>Current Time: {ct} </h5>

//     </>,
//     document.getElementById("root")
// )


// React JSX Attributes

//     var img = "https://picsum.photos/200/300.jpg";
//     var img1 = "https://picsum.photos/200/300/?blur=2";
//     var img3 = "https://picsum.photos/200/300?grayscale";
//     var img4 = "https://picsum.photos/seed/picsum/200/300";
//     var img5 = "https://picsum.photos/id/237/200/300";
//     var link = "https://github.com/bikashsaud";

//     // inline css

//     const heading =         {
//         marginTop: '20px',
//         color: 'darkblue',
//         textAlign: 'center',
//         textTransform: 'capitalize',
//         fontWeight: 'bold',
//         textShadow: '0px 2px 4px #ffe9c5',
//         fontSize: '40px',
//         }

// ReactDOM.render(
    // <>
    // {/* <h2  */}
    // inline css exxample
    // style={
        // heading //{either this way make constant and add in this as variable or }
        // second method
        // {
        //     marginTop: '20px',
        //     color: 'darkblue',
        //     textAlign: 'center',
        //     textTransform: 'capitalize',
        //     fontWeight: 'bold',
        //     textShadow: '0px 2px 4px #ffe9c5',
        //     fontSize: '40px',
        //     }
//     }> JSX Attribute</h2>
//     <h2 className="heading-sub">My Name is Bkash Saud</h2>
//     <div className="img-dev">
//         <a href={link} target="_blank">
//         <img src= {img} alt='picsum photo'/>
//         </a>
//         <img src= {img1} alt='picsum photo'/>
//         <img src= {img3} alt='picsum photo'/>
//         <img src= {img4} alt='picsum photo'/>
//         <img src= {img5} alt='picsum photo'/>
//     </div>
//     </>,
//     document.getElementById("root")
// )


// TASK 3
// task show color of text according to time 
// const main = {
//     margin:"200px 300px 200px 400px",
//     backgroundColor:"rgb(189, 255, 223)",
//     color: "Blue",
//     width: '292px',
//     height:'90px',
//     paddingTop: '26px',
//     borderRadius: '10px',
// }
// const text_main = {
//     backgroundColor:"rgb(189, 255, 223)",
//     color: "rgb(245, 149, 149)",
//     backgroundColor:"rgb(189, 255, 223)",

// }
// var currentTime = new Date().getHours();
// let greeting = '';
// let grMr
// if(currentTime>0 && currentTime<12){
//     greeting = "Good Morning";
//      grMr = {
//         color: "green"
//     }
// }
// else if(currentTime>12 && currentTime<18){
//     greeting = "Good Afternoon";
//      grMr = {
//         color: "brown",
//     }
// }
// else if(currentTime>18 && currentTime<24){
//     greeting = "Good Night";
//      grMr = {
//         color: "black"
//     }
// };

// const divSty = {
//     // height:"00px",
//     width: "600px",
//     boxSize: "box-borderd",

// }
// ReactDOM.render(
//     <>
//     <div >
//        <h2 style={main}> Greeting: Hello Sir, <span style = {main,grMr}> {`${greeting}`} </span></h2> 
//     </div>
    
//     </>,
//     document.getElementById('root')
// )



// importent part
//<----------------- ################### React Component #################3-----------> 



ReactDOM.render(<App/>,document.getElementById('root')
)