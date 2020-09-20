import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';


function SelectAircraft() {

    const [data, setData] = useState(false);


    useEffect (() => {
        fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL`)
        .then (resp => resp.json())
        .then( holidays => setData(holidays))
        .catch( err => {
            console.log('Error!', err);
          });
    }, []);


    if (!data) {
        return "Loading..."
    }


    return (
       <>
  
        <h1>Select the aircraft</h1>
        <select>
         <option className="select-option" value="">{}</option>
        <option value=""></option>
        <option value=""></option>
        </select>
        <button>Select</button>

        </>
        
    )
}

/*
<ul className="list">
{data.holidays.map((holiday, index) => <li key={index}>{holiday.name}</li>)}
</ul>
*/
export default SelectAircraft