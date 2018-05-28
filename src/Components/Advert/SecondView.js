import React, { Component } from "react";
// import { Row,Col} from "antd";

class SecondView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picUrl:"/imgs/ad1.png",
   
        };
    }
    
    componentDidMount(){
        const url = window.location.pathname;
        const array = url.split("/");
        switch(array[1]){
        case "career":
            this.setState({
                picUrl:"/imgs/ad2.png",
               
            });
            return null;
        case "intro-company":
            this.setState({
                picUrl:"/imgs/about-com.png"
            });
            return null;
        default:
            return null;
        }
    }
    render() {
        let {picUrl} = this.state;
        let {title,vice} = this.props;
        return (
            <div style={{height:"300px",
                background: `url(${picUrl})0px / cover`,
                
            }}
              
            >
                <div className="second-view">
                    <h1>{title}</h1>
                    <h2>{vice}</h2>
                </div>
            </div>);
    }
}

export default SecondView;