import React, { Component } from "react";
import Animate from "rc-animate";
// import Banner from "../Banners";
import{  PRODUCTS } from "../../Data";
class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (
            <div style={{minHeight:"900px",background:"#fff"}}>
                <Animate showProp="visible" transitionName="fade">
                    {PRODUCTS.map(obj=>{
                        return(
                            <div key={obj.key}>
                                <div className="advert-content">
                                    <center>
                                        <h1>{obj.title} | {obj.name}</h1>
                                        <p>{obj.CNcontent}</p>
                                        <img src={`/imgs/${obj.url}.png`} style={{width:"100%"}}/>
                                    </center>
                                </div>
                                {/* <Banner/> */}
                            </div>
                        );
                   
                    })}
                
                </Animate>
            </div>);
    }
}

export default Introduction;