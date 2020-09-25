import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';


function SelectAircraft() {

    const [aircrafts, setAircrafts] = useState();


    useEffect (() => {
        fetch(`https://aviation-edge.com/v2/public/airplaneDatabase?key=a9b5e1-74ddb7&codeIataAirline=0B`)
        .then (res => res.json())
        .then (data => console.log(data))
        .then (data => setAircrafts(data))
        .catch( err => console.error(err))
    }, []);

    /*      .then( resp => {
            return resp.json();
          }).then( airplaneIataType => {
            console.log(airplaneIataType);
            let newAir = {...airplaneIataType};
            console.log(newAir); 
          });

*/ 

    return (
       <>
        <h1>Select the aircraft</h1>
        
       
        <button>Select</button>

        <ul>
       
       </ul>
        </>
        
    )
}

/*
 {aircrafts.map((aircraft, index) => <li key={index}>{aircraft.codeIataAirline}</li>)}


         <option className="select-option" value="">{}</option>
        <option value=""></option>
        <option value=""></option>


<ul className="list">
{data.holidays.map((holiday, index) => <li key={index}>{holiday.name}</li>)}
</ul>
*/
export default SelectAircraft