import React, { useState} from "react";
import ChoosedServices from "./ChoosedServices";
import OrderedServices from "./OrderedServices";
import SelectAircraft from "./SelectAircraft";


function Header() {

    const [order, setOrder] = useState(null);

    const getOrder = (order) => {
        setOrder(order);
    }
 


    return (
        <div>

        <div id="app">
               
        </div>

       
            <div className="select-aircraft">
            <SelectAircraft/>
            </div>

            <div className="main-content">

            <div className="choosed-services">
                <h2>CHOOSE YOUR SERVICE</h2>
            <ChoosedServices getOrder={getOrder}/>
            </div>

            <div className="ordered-services">
            <OrderedServices newOrder={order}/>
            </div>
        </div>

        </div>
    );
}


export default Header