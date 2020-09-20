import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import SelectAircraft from "./SelectAircraft";
import ChoosedServices from "./ChoosedServices";
import OrderedServices from "./OrderedServices";


const App = () => <Header/>
ReactDOM.render(<App/>, document.getElementById("header"));

const AppSelect = () => <SelectAircraft/>
ReactDOM.render(<AppSelect/>, document.getElementById("select-aircraft"));

const AppChoosed = () => <ChoosedServices/>
ReactDOM.render(<AppChoosed/>, document.getElementById("choosed-services"));

const AppOrdered = () => <OrderedServices/>
ReactDOM.render(<AppOrdered/>, document.getElementById("ordered-services"));