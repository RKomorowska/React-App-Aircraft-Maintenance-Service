import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { CtxConsumer } from "./app";


const Basket = (props) => {

    const backToOrders = () => {
        props.history.push("/");
    }

    return (
       <CtxConsumer>
           {context => (
               <>
               <div className="basket-content">
               <h1>YOUR ORDER</h1>
                <h2>ORDER VALUE: {context.basket} PLN</h2>
                <button>PAY</button>
               <button id="basket-button" onClick={() => backToOrders()}>BACK TO ORDERS</button>
               </div>
               </>
           )}
        </CtxConsumer>
        
    )
}


export default withRouter(Basket);


