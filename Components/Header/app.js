import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Basket from "./Basket";
import SelectAircraft from "./SelectAircraft";
import ChoosedServices from "./ChoosedServices";
import OrderedServices from "./OrderedServices";
import { Switch, Route, BrowserRouter } from "react-router-dom";


/*const App = () => <Header/> 
ReactDOM.render(<Header/>, document.getElementById("header")); */

/*

const AppSelect = () => <SelectAircraft/>
ReactDOM.render(<AppSelect/>, document.getElementById("select-aircraft"));



const AppChoosed = () => <ChoosedServices/>
ReactDOM.render(<AppChoosed/>, document.getElementById("choosed-services"));

const AppOrdered = () => <OrderedServices/>
ReactDOM.render(<AppOrdered/>, document.getElementById("ordered-services"));

*/

function Routing() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/Basket" component={Basket} />
            </Switch>
        </BrowserRouter>
    )
}


ReactDOM.render(<Routing />, document.getElementById("root"));