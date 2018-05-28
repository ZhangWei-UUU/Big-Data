import React, { Component } from "react";

import HeaderNav from "../Components/Layout/HeaderNav";

import SecondView from "../Components/Advert/SecondView";
class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (<div>
            <HeaderNav/>
            <SecondView/>
            <div className="content">
                <div className="content-inner">
                   
                </div>
            </div>
        </div>);
    }
}

export default Team;
