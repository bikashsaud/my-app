import React from 'react';
import SeriesCard from './props/Props';
import constData from './props/constData';

function SeriesData(val){
    return(
    <SeriesCard 
    imgsrc = {val.imgsrc} 
    title ={val.title}  
    link ={val.link}
    />
    );
}

function App(){
    return(
    <>
    <h3>First Method</h3>
    {constData.map(SeriesData)};
     {/* second method */}
     <h4>Second Method</h4>
    {constData.map(function SeriesData(val) {
            return(
                <SeriesCard 
                imgsrc = {val.imgsrc} 
                title ={val.title}  
                link ={val.link}
                />
                );
    })}
    {/* third method FAT Arrow Functino */}
    <h4>3rd Method </h4>
    {constData.map((val, index)=> {
        console.log(index)
        return(
            <SeriesCard 
            imgsrc = {val.imgsrc} 
            title ={val.title}  
            link ={val.link}
            />
        )
    })}
    <h5>difference between FAT arrow and Function</h5>
    {dataAdd()}
    <br />
    {dataRemove()}
    </>)
}

export default App; 


// difference between function and fat arrow function 

function dataAdd(val){
    return (
        <h1>Bikash Added</h1>
    );
}

const dataRemove = (val) => <h1>Bkash Remove</h1> 