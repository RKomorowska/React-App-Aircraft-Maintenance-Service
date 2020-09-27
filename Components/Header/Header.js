import React, { useState} from "react";
import ChoosedServices from "./ChoosedServices";
import OrderedServices from "./OrderedServices";


function Header() {

    const [order, setOrder] = useState(null);

    const getOrder = (order) => {
        setOrder(order);
    }
 


    return (
        <div className="main-content">

        <div className="main-title" id="app">
                <h1>AIRCRAFT MAINTENANCE SERVICE</h1>
        </div>

        <div>
            <ChoosedServices getOrder={getOrder}/>
            <OrderedServices newOrder={order}/>
        </div>

        </div>
    );
}

export default Header