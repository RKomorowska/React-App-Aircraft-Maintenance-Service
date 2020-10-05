import React from "react";
import Services from "./services.json"
import { useState } from 'react';
import { useEffect } from 'react';


function ChoosedServices(props) {

    const [services, setServices] = useState([]);

    const [cost, setCost] = useState(0);


    useEffect( () => {
        Services.map(service => {
            service.checked = service.cost === 0 ? true : false;
            return service;
        })

        setServices(Services);

    }, [])

    
    const serviceChange = (service) => {
        setServices(
            services.map( el => {
                if(el.name === service.name) {
                    el.checked = !el.checked;
                }
                return el;
            })
        );

        
        setCost(
            services.reduce( (sum, service) => {
                return service.checked ? sum + service.cost : sum;
            }, 0))
    }

    
    const acceptOrder = () => {
        let order = {cost: cost, services: []};
        services.forEach(service => {
            if (service.checked) order.services.push(service);
        })
        props.getOrder(order);
        resetOrder();
    }


    const resetOrder = () => {
        services.forEach(service => {
            service.cost === 0 ? service.checked = true : service.checked = false;
        })
    }

    return (
       <>
        <h1></h1>
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
        <h4>TOTAL AMOUNT {cost} PLN</h4>
        <button onClick={() => acceptOrder()}>ACCEPT</button>
        </>
        
    )
}



export default ChoosedServices