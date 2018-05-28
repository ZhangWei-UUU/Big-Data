import React, { Component } from "react";
import HeaderNav from "../Components/Layout/HeaderNav";
import FirstView from "../Components/Advert/FirstView";
import { JOIN_US } from "../Data";
class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (<div>
            <HeaderNav/>
            <FirstView/>
            <div className="content-inner jobs">
                {JOIN_US.cn.list.map(obj=>{
                    return(
                        <div key={obj.key}>
                            <h1>{obj.title}</h1>
                            <h2>{obj.description}</h2>
                            <ol>
                                {obj.content_one.map(k=>{
                                    return(<li>{k}</li>);
                                })} 
                            </ol>
                            <h2>{obj.requirements}</h2>
                            <ol>
                                {obj.content_two.map(k=>{
                                    return(<li>{k}</li>);
                                })} 
                            </ol>
                        </div>
                    );
                })}
            </div>
        </div>);
    }
}

export default Career;
