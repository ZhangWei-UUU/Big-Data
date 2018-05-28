import React, { Component } from "react";
import {Modal} from "antd";
class SolutionInstant extends Component{
    constructor(props){
        super(props);
        this.state ={
            industry:null,
            visible: false,
        };
        this.handle = this.handle.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    
    handle(){
        this.setState({
            visible:true
        });
    }

    hideModal(){
        this.setState({
            visible:false
        });
    }

    render(){
        let {industry,url,content} = this.props;
        return(
            <div>
                <div className="content-inner u-ban"  onClick={this.handle}>
                    <h1 className="u-title">{industry}</h1>
                    <img src={`/imgs/${url}.png`} style={{width:"100%",marginTop:"80px"}}/>
                    <p className="u-txt">{content}</p>
               
                </div>
                <Modal
                    title=""
                    width="98%"
                    height="80%"
                    visible={this.state.visible}
                    onCancel={this.hideModal}
                    onOk={this.hideModal}
                    okText="关闭"
                    cancelText="取消"
                >
                    <img src={`/imgs/${url}.png`} style={{width:"100%",height:"100%"}}/>
                </Modal>
            </div>
        );
    }
}

export default SolutionInstant;