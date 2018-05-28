import React, { Component } from "react";
import HeaderNav from "../Components/Layout/HeaderNav";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return <div>
            <HeaderNav/>
            
        </div>;
    }
}

export default About;
