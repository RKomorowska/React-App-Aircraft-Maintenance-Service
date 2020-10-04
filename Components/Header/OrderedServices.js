import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { withRouter } from "react-router-dom";


function OrderedServices(props) {

    const [cost, setCost] = useState(0);
    const [neworder, setNeworder] = useState([]);

    useEffect( () => {
        if(props.newOrder) { 
        setNeworder([...neworder, props.newOrder]);
    }
    }, [props.newOrder])

    useEffect( () => {
        let costAll = neworder.reduce( (sum, order) => sum + order.cost, 0);
        setCost(costAll);
    }, [neworder])

    const removeOrder = (indx) => {
        let remOrder = neworder.filter((order, index) => index !== indx);
        setNeworder(remOrder);
    }

    const goToPay = () => {
        props.history.push("/Basket");
    }

    return (
       <>
        <h1>ORDER</h1>
        {neworder.map( (order, index) => {
            return (
                <div key={index}>
                    <h3>
                        {index + 1}# order
                        ({order.services.length} SERVICES)
                    </h3>
                    <button onClick={() => removeOrder(index)}>REMOVE</button>

                    <p>-------------------------</p>
            <p>TOTAL AMOUNT TO PAY: {cost} PLN</p>
            <button onClick={() => goToPay()}>ACCEPT ORDER</button>
                </div>
            )
        })}
        </>
        
    )
}


export default withRouter(OrderedServices);