import React from "react";
import Services from "./services.json"
import { useState } from 'react';
import { useEffect } from 'react';


function ChoosedServices() {

    const [services, setServices] = useState([]);



    return (
       <>
        <h1>Select your service</h1>
        {Services.map((service, index) => {
            return (
                <div className="services-main" key={index}>
                    <input type="checkbox" />
                    <img className="aircraft-pic" />
                    <p>{service.name}</p>
                    <p>{service.cost} PLN </p>
                </div>
            )
        })
        }
        <h4>TOTAL AMOUNT 0 PLN</h4>
        <button>ACCEPT</button>
        </>
        
    )
}


export default ChoosedServices