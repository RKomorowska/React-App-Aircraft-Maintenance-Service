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
               <h1>YOUR ORDERS</h1>
                <h2>TOTAL PAYMENT: {context.basket} PLN</h2>
               <button onClick={() => backToOrders()}>BACK TO ORDERS</button>
               </>
           )}
        </CtxConsumer>
        
    )
}


export default withRouter(Basket);


