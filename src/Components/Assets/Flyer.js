import React,{Component} from "react";
import {Icon } from "antd";

class Flyer extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        };
        this.enter = this.enter.bind(this);
        this.leave = this.leave.bind(this);
    }
    
    enter(){
        console.log("xxx");
        this.setState({
            show:true
        });
    }

    leave(){
        this.setState({
            show:false
        });
    }
    render(){
        let {show} = this.state;
        return(
            <div className="flyer">
                {show?<div className="fly-qr" onMouseLeave={this.leave}>
                    <img src="/imgs/qr.jpg" style={{width:"100%"}}/>
                </div>:null}
                <div className="flyer-inner" onMouseEnter={this.enter}>
                    <Icon type="wechat" />
                    <p>微<br/>信<br/>咨<br/>询</p>
                </div>
            </div>
        );
    }
}
export default Flyer;