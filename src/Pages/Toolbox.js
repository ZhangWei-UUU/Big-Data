import React, { Component } from "react";
import {Breadcrumb} from "antd";

import HeaderNav from "../Components/Layout/HeaderNav";

class Toolbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lab:null
        };
    }
    
    componentDidMount(){
        const {pathname} = window.location;
        const array = pathname.split("/");
        const lab = array.pop();
        this.setState({
            lab
        });
    }

    componentDidUpdate(oldP,oldS){
        const {pathname} = window.location;
        const array = pathname.split("/");
        const lab = array.pop();
        console.log(oldS,oldP);
        if(oldS.lab !== lab){
            this.setState({
                lab
            });
        }

    }
    render() {
        let {lab} = this.state;
        return (<div>
            <HeaderNav/>
            <div className="normal-header"/>
            <div className="content">
                <div className="content-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item>工具箱</Breadcrumb.Item>
                        <Breadcrumb.Item>{lab}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </div>);
    }
}

export default Toolbox;
