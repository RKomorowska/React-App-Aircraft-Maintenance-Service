import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { CtxConsumer } from "./app";




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

    const goToPay = (ctx) => {
        ctx.refresh(cost);
        props.history.push("/Basket");
    }


    useEffect( () => {
        const dataLS = localStorage.getItem("neworder");
        if (dataLS) {
            setNeworder(JSON.parse(dataLS));
        }
    }, [])


    useEffect( () => {
        localStorage.setItem("neworder", JSON.stringify(neworder))
    },)
    


    return (
        <CtxConsumer>
            { context => (
                 <>
                 <h1>ORDER</h1>
                 {neworder.map( (order, index) => {
                     return (
                         <div className="choosed-order-localS" key={index}>
                             <h3>
                                 {index + 1}# YOU ARE ORDERING  
                                <p></p>
                                 {order.services.length} SERVICES
                             </h3>
                             <button onClick={() => removeOrder(index)}>REMOVE ORDER</button>
         
                             <p></p>
                     
                     <button onClick={() => goToPay(context)}>ACCEPT ORDER</button>
                         </div>
                     )
                 })}
                        
                 </>
            )}
      
        </CtxConsumer>
    )
}

/*<p>TOTAL AMOUNT TO PAY: {cost} PLN</p>*/
export default withRouter(OrderedServices);
