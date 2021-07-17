import React from 'react';

import SeriesCard from "./Props";

const OddDaySeries = (val, index) => {
    return(
    <SeriesCard 
    key = {val.id}
    val_id = {val.id}
    imgsrc = {val.imgsrc} 
    title ={val.title}  
    link ={val.link}
    />
    )
}

export default OddDaySeries;