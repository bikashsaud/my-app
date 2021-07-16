import React from 'react';
import SeriesCard from './props/Props';
import constData from './props/constData';



function App() {
    return(
    <>
    {/* Props */}
    {/* do not use researve keyword in props... */}
    < SeriesCard imgsrc = {constData[0].imgsrc} title ={constData[0].title}  link ={constData[0].link} ></SeriesCard>
    < SeriesCard imgsrc = {constData[1].imgsrc} title ={constData[1].title}  link ={constData[1].link} ></SeriesCard>
    < SeriesCard imgsrc = {constData[2].imgsrc} title ={constData[2].title}  link ={constData[2].link} ></SeriesCard>
    < SeriesCard imgsrc = {constData[3].imgsrc} title ={constData[3].title}  link ={constData[3].link} ></SeriesCard>


    </>
    );
}

export default App;