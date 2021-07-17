import React from 'react';

import Image from "./Image"
import './props.css';



function SeriesCard(props, index){
    return (
        <>
            <div className = "div_name">
                <div className='main_card'>

                    <Image imgsrcs = {props.imgsrc}></Image>
                    <h4 className = "title_name">{props.val_id}. {props.title} </h4>
                    <h4 className = "title_name">  </h4>

                    <a  href = {props.link} target="_blank" rel="noreferrer"> <button> Watch Now 🔒 </button>  </a>
                </div>
            </div>
        
        
        </>
    )
}
        // MAPPING METHOD 
    //  {/* second method */}
    //  <h4>Second Method</h4>
    // {constData.map(function SeriesData(val) {
    //         return(
    //             <SeriesCard 
    //             imgsrc = {val.imgsrc} 
    //             title ={val.title}  
    //             link ={val.link}
    //             />
    //             );
    // })}
    // {/* third method FAT Arrow Functino */}
    // <h4>3rd Method </h4>
    // {constData.map((val, index)=> {
    //     console.log(index)
    //     return(
    //         <SeriesCard 
    //         imgsrc = {val.imgsrc} 
    //         title ={val.title}
    //         link ={val.link}
    //         />
    //     )
    // })}


// difference between function and fat arrow function 

function dataAdd(val){
    return (
        <h1>Bikash Added</h1>
    );
}

const dataRemove = (val) => <h1>Bkash Remove</h1> 


export default SeriesCard;
