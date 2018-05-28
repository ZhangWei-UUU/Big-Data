import React, { Component } from "react";
import { Row,Col} from "antd";
import{ JOIN_US } from "../../Data";

class FirstView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picUrl:"/imgs/ad1.png",
            txt:JOIN_US,
            active:"社会招聘"
        };
    }
    
    componentDidMount(){
        const url = window.location.pathname;
        const array = url.split("/");
        switch(array[1]){
        case "join-us":
            this.setState({
                picUrl:"/imgs/ad2.png",
                txt:JOIN_US
            });
            return null;
        case "products":
            this.setState({
                picUrl:"/imgs/products.png",
                txt:JOIN_US
            });
            return null;
        default:
            return null;
        }
    }
    render() {
        let {picUrl,txt,active} = this.state;
        return (
            <div style={{height:"500px",
                background: `url(${picUrl})`,
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
            }}
              
            >
                <div className="first-view">
                    <center>
                        <h1>{txt.cn.title}</h1>
                        <h3>{txt.cn.sologan}</h3>
                        <div className="hr-tabs">
                            {txt.cn.tabs?
                                <Row>
                                    {txt.cn.tabs.map(tab=>{
                                        return(
                                            <Col key={tab.key} xl={8} sm={24}>
                                                <button className={active === tab.name?"active":null} style={{marginTop:"10px"}}>{tab.name}</button>
                                            </Col>
                                        );
                                    })}
                                </Row>
                                :null}
                        </div>
                    </center>
                </div>
            </div>);
    }
}

export default FirstView;