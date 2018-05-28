import React,{Component} from "react";
import { Carousel,Row,Col } from "antd";

class CarouselHead extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

    render(){
        return(
            <Carousel autoplay>
                <div className="sider-single gradient1">
                    <div className="sider-single-inner">
                        <Row>
                            <Col span={10} offset={4}>
                                <h1>物数科技</h1>
                                <h2>区块链“智联”物理世界和数字世界</h2>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="sider-single gradient1">
                    <div className="sider-single-inner">
                        <Row>
                            <Col span={10} offset={4}>
                                <h1>热点新闻</h1>
                                <h2>聚焦区块链热点</h2>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="sider-single gradient2">
                    <div className="sider-single-inner">
                        <Row>
                            <Col span={10} offset={4}>
                                <h1>自偿性风控授信</h1>
                                <h2>图形化交易结构的定制</h2>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Carousel>
        );
    }
}

export default CarouselHead;