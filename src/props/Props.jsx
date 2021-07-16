import React from 'react';

import './props.css';



function SeriesCard(props){
    return (
        <>
            <div className = "div_name">
                <div className='main_card'>

                    <img className = "img" src = {props.imgsrc} alt="Series One" ></img>
                    <h4 className = "title_name"> {props.title} </h4>
                    <a  href = {props.link} target="_blank"> <button>
                    Watch Now
                        </button>  </a>
                </div>
            </div>
        
        
        </>
    )
}


export default SeriesCard;