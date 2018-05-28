import React, { Component } from "react";
import { Row,Col,Icon,Divider} from "antd";

const data = {
    logo:"/",
    rights:"Copyright © UMARK 2018. All Rights Reserved.",
    notes:"物数（上海）信息科技有限公司 版权所有",
    tel:"021-50686066",
    address:"地址：上海市浦东新区龙阳路2277号11楼1103室",
    links:[
        {key:1,name:"wechat"},
        {key:2,name:"linkedin"},
        {key:3,name:"weibo"},
        {key:4,name:"zhihu"},
    ]
};
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (
            <div className="u-footer">
                <div style={{height:"210px",marginTop:"5px",width:"100%"}}>
                    <Row>
                        <Col span={18}>
                        
                        </Col>
                        <Col span={4}>
                            <Row>
                                {data.links.map(obj=>{
                                    return(
                                        <Col span={4} key={obj.key}>
                                            <div ><Icon type={obj.name} 
                                                style={{fontSize:"20px",color:"#e8e8e8"}}/>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Divider style={{color:"#999"}}/>
                            <p>{data.notes}</p>
                            <p>{data.address}</p>
                            <div
                                style={{
                                    background:"#0092ee",
                                    fontSize:"18px",
                                    color:"#fff",
                                    textAlign:"center",
                                    padding:"5px 0"
                                }}
                            >{data.tel}</div>
                        </Col>
                        <Col span={2}>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col span={12} offset={6}>
                        <center>{data.rights}</center>
                    </Col>
                </Row>
            </div>);
    }
}

export default Footer;