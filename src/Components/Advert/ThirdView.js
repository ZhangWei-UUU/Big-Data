import React, { Component } from "react";

import{ ADVERTISING } from "../../Data";

class ThirdView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picUrl:"/imgs/products.png",
            txt:""
        };
    }
    
    componentDidMount(){
        const url = window.location.pathname;
        const array = url.split("/");
        switch(array[1]){
        case "products":
            this.setState({
                picUrl:"/imgs/products.png",
                txt:ADVERTISING[1]
            });
            return null;
        case "solution":
            this.setState({
                picUrl:"/imgs/solution.png",
                txt:ADVERTISING[0]
            });
            return null;
        default:
            return null;
        }
    }
    render() {
        let {picUrl,txt} = this.state;
        return (
            <div style={{height:"400px",
                background: `url(${picUrl})`,
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
            }}
              
            >
                <div className="first-view">
                    <div style={{marginLeft:"15%"}} className="animation fadeInLeft">
                        <h1>{txt.title}</h1>
                        <p>{txt.short}</p>
                    </div>
                </div>
            </div>);
    }
}

export default  ThirdView;