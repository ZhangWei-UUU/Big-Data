import React, { Component } from "react";

import HeaderNav from "../Components/Layout/HeaderNav";
import ThirdView from "../Components/Advert/ThirdView";
import SolutionInstant from "../Components/Solution";
import { SOLUTIONS } from "../Data";
class Solution extends Component {
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
            {SOLUTIONS.map(obj=>{
                return(
                    <SolutionInstant key={obj.key} 
                        industry={obj.industry} 
                        url={obj.url}  
                        content={obj.content}
                       
                    />
                );
            })}
           
        </div>);
    }
}

export default Solution;
