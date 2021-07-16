import React from 'react';
const name = "Bikash Saud";
const address = "Baitadi Pancheshwor 01, Pancheshwor, Nepal"
const myJob = 'Software Engineer';
const bodyCss = {
    margin : '110px 0px 0px 200px',
    color : 'liteblue',
    boxShadow: '5px 5px 5px liteblue'
}

function Body() {
    return (
    <div style = {bodyCss}>
        <h4>Name: {name}</h4>
        <h4>Address: {address}</h4>
        <h4>Position: {myJob}</h4>
    </div>
    );
    
}

export default Body;