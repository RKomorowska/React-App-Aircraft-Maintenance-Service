import React from "react";
import Services from "./services.json"
import { useState } from 'react';
import { useEffect } from 'react';


function ChoosedServices() {

    const [services, setServices] = useState([]);


    useEffect( () => {
        Services.map(service => {
            service.checked = service.checked;
            return service;
        })

        setServices(Services);

    }, [])

    
    const serviceChange = (service) => {

    }

    


    return (
       <>
        <h1>Select your service</h1>
        {services.map((service, index) => {
            return (
                <div className="services-main" key={index}>
                    <input type="checkbox" checked={service.checked} onChange={() => serviceChange(service)}/>
                    <img className="aircraft-pic" />
                    <p>{service.name}</p>
                    {service.cost === 0 ? <p>FOC</p> : <p>{service.cost} PLN </p>}
                </div>
            )
        })
        }
        <h4>TOTAL AMOUNT {0} PLN</h4>
        <button>ACCEPT</button>
        </>
        
    )
}


export default ChoosedServices