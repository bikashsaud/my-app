import React from "react";

import SeriesCard from "./Props";

const EventDaySeries = (val, index) => {
        console.log(index)
    return(
       
    <SeriesCard 
    key = {val.id}
    val_id = {val.id}
    imgsrc = {val.imgsrc} 
    title ={val.title}  
    link ={val.link}
        
    />
        );
}

export default EventDaySeries;