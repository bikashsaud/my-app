import React from 'react';
import constData from './props/constData';
import EventDaySeries from './props/EvenDaySeries';
import OddDaySeries from './props/OddDaySeries';

const today = new Date().getDate()

const FilterSeries = (val) => {
    if(val%2===0)
    {   console.log(val.day)
        return <> {constData.map(EventDaySeries)};</>
    }
    else{
        console.log(val.day)
        return <> {constData.map(OddDaySeries)}</>
    }
}





function App(){
    // return(<> <FilterSeries day = {today} /> </>)
    
    // trnari operator
    return(
    <> 
    <h5> </h5>
    {today%2===0 ? constData.map(EventDaySeries) :  constData.map(OddDaySeries)};
    </>
    )
    }

export default App; 


