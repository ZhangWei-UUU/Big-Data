import React, { Component } from "react";
import {Breadcrumb} from "antd";
import { translate_labs } from "../Data/filter";
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
            lab,
            img:""
        });
        const KEY = "34dd369f529be2ecc3035aa585e964e6";
        const text = "你好世界";
        const url =`/api?key=${KEY}&type=1&text=${text}`;

        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({
                img:data.result.base64_image
            });
        });
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
                        <Breadcrumb.Item>{translate_labs(lab)}</Breadcrumb.Item>
                    </Breadcrumb>
                    <img src={`data:image/png;base64,${this.state.img}`}/>
                </div>
            </div>
        </div>);
    }
}

export default Toolbox;
