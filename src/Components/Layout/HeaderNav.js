import React, { Component } from "react";
import { Layout, Menu,Icon } from "antd";
import {
    Link
} from "react-router-dom";
import {HEAD_NAVS} from "../../Data";
const { Header } = Layout;
const { SubMenu,Item } = Menu;

class HeaderNav extends Component{
    constructor(props){
        super(props);
        this.state={
            current:[]
        };
        
    }

    componentDidMount(){
        const url = window.location.pathname;
        const array = url.split("/");
        this.setState({
            current:array
        });
    }
    render(){
        const url = window.location.pathname;
        const array = url.split("/");
        let { current } = this.state;
        return(
            <div style={{ position:"absolute",
                width:"100%",
                zIndex:100,
                top:"0" }}>
                <Header className="header" 
                    style={{ background:"none"}}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={array}
                        selectedKeys={current}
                        onClick={this.handleClick}
                        style={{ lineHeight: "64px", 
                            zIndex:"10",
                            borderBottom:"none",
                            background:"none" }}
                    >
                        {HEAD_NAVS.map(obj => {
                            if(obj.children){
                                return(
                                    <SubMenu key={obj.key} 
                                        title={<span>
                                            {obj.name}&nbsp;<Icon type="caret-down" />
                                        </span>}>
                                        {obj.children.map(child=>{
                                            return(
                                                <Item key={child.key}> 
                                                    <Link to={child.url} >  
                                                        <div className="u-header-sub">   
                                                            {child.name} 
                                                        </div>
                                                    </Link>
                                                </Item>
                                            );
                                        })}
                                    </SubMenu>);
                            }else{
                                return(
                                    <Item key={obj.key} >
                                        {obj.children?<div>{obj.name}
                                        </div >:
                                            <Link
                                              
                                                to={
                                                    obj.url
                                                }>{obj.name}
                                            </Link >}  
                                    </Item>
                                );
                            }
                           
                        })}   
                    </Menu>
                </Header>
            </div>
        );
    }
}
export default HeaderNav;