import React, { Component } from "react";
import HeaderNav from "../Components/Layout/HeaderNav";
import ThirdView from "../Components/Advert/ThirdView";
import Customer from "../Components/Text/Customer";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (<div>
            <HeaderNav/>
            <ThirdView/>
            <Customer/>
        </div>);
    }
}

export default Products;
