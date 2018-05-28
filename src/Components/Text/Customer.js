import React, { Component } from "react";
// import Banner from "../Banners";
import{  PRODUCTS_TWO } from "../../Data";

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (
            <div style={{minHeight:"900px",background:"#fff"}}>
             
                {PRODUCTS_TWO.map(obj=>{
                    return(
                        <div key={obj.key}>
                            <div className="product-content">
                                <center>
                                    <h1>{obj.title} | {obj.name}</h1>
                                    <p className="u-txt">{obj.CNcontent}</p>
                                    <img src={`/imgs/${obj.url}.png`} style={{width:"60%"}}/>
                                </center>
                            </div>
                        
                        </div>
                    );
                   
                })}
                
         
            </div>);
    }
}

export default Customer;