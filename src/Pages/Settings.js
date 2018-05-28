import React, { Component } from "react";
import { Row, Col, Tree, Input, Icon, Button } from "antd";
import HeaderNav from "../Components/Layout/HeaderNav";

const { TreeNode } = Tree;
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedKey: null,
            loading:false
        };
        this.checkChild = this.checkChild.bind(this);
        this.click = this.click.bind(this);
        this.inclick = this.inclick.bind(this);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.cancel = this.cancel.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: [
                { key: "1", name: "首页", url: "/index" },
                {
                    key: "2",
                    name: "内容",
                    url: "/content",
                    children: [
                        { key: "2.1", name: "美国", url: "/content/us" },
                        { key: "2.2", name: "日本", url: "/content/jp" },
                        { key: "2.3", name: "韩国", url: "/content/kr" },
                    ],
                },
                { key: "3", name: "信息", url: "/info" },
            ],
        });
    }

    checkChild(array) {
        const { selectedKey,loading } = this.state;
        return array.map((obj) => {
            if (obj.children) {
                return (
                    <TreeNode
                        title={selectedKey === obj.key ?
                            <div style={{minWidth:"700px"}}>
                                <Row>
                                    <Col span={4}>
                                        <Input placeholder="菜单名" 
                                            defaultValue={obj.name}
                                            onClick={e => this.inclick(e)} />
                                    </Col>
                                    <Col span={6} offset={1}>
                                        <Input placeholder="请填写URL"
                                            defaultValue={obj.url}
                                            onClick={e => this.inclick(e)} />
                                    </Col>
                                
                                    <Col span={2} offset={1}>
                                        <center>
                                            <Button onClick={this.cancel}>取消</Button>
                                        </center>
                                    </Col>
                                    <Col span={2} offset={1}>
                                        <center>
                                            <Button type="primary" 
                                                loading={loading}
                                                onClick={this.submit}>提交</Button>
                                        </center>
                                    </Col>
                                    <Col span={1}  offset={1}>
                                        <center>
                                            <a role="button" 
                                                onClick={this.add}>
                                                <Icon type="plus" /> </a>
                                        </center>
                                    </Col>
                                    <Col span={1} offset={1}>
                                        <center>
                                            <a role="button" 
                                                onClick={this.minus}>
                                                <Icon type="minus" /></a>
                                        </center>
                                    </Col>
                                </Row>
                            </div>
                            : obj.name}
                        key={obj.key}
                    >
                        { this.checkChild(obj.children)}
                    </TreeNode>
                );
            }
            return (
                <TreeNode
                    title={selectedKey === obj.key ?
                        <div style={{minWidth:"700px"}}>
                            <Row>
                                <Col span={4}>
                                    <Input placeholder="菜单名" 
                                        defaultValue={obj.name}
                                        onClick={e => this.inclick(e)} />
                                </Col>
                                <Col span={6} offset={1}>
                                    <Input placeholder="请填写URL"
                                        defaultValue={obj.url}
                                        onClick={e => this.inclick(e)} />
                                </Col>
                        
                                <Col span={2} offset={1}>
                                    <center>
                                        <Button onClick={this.cancel}>取消</Button>
                                    </center>
                                </Col>
                                <Col span={2} offset={1}>
                                    <center>
                                        <Button type="primary" 
                                            loading={loading}
                                            onClick={this.submit}>提交</Button>
                                    </center>
                                </Col>
                                <Col span={1}  offset={1}>
                                    <center>
                                        <a role="button" 
                                            onClick={this.add}>
                                            <Icon type="plus" /> </a>
                                    </center>
                                </Col>
                                <Col span={1} offset={1}>
                                    <center>
                                        <a role="button" 
                                            onClick={this.minus}>
                                            <Icon type="minus" /></a>
                                    </center>
                                </Col>
                            </Row>
                        </div>
                        : obj.name}
                    key={obj.key}
                />
            );
        });
    }

    inclick(e) {
        e.stopPropagation();
    }

    add(e) {
        e.stopPropagation();
        // this.setState({
        //     selectedKey: null,
        // });
    }

    minus(e) {
        e.stopPropagation();
        // this.setState({
        //     selectedKey: null,
        // });
    }

    cancel(e) {
        e.stopPropagation();
        this.setState({
            selectedKey: null,
        });
    }
    
    submit(e) {
        e.stopPropagation();
        this.setState({
            loading:true
        });
    }

    click(selectedKeys) {
        if (selectedKeys[0] !== "main") {
            this.setState({
                selectedKey: selectedKeys[0],
            });
        }
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <HeaderNav/>
                <Tree
                    showLine
                    defaultExpandedKeys={["main"]}
                    onSelect={this.click}
                >
                    <TreeNode title="导航" key="main" >
                        {this.checkChild(data)}
                    </TreeNode>
                </Tree>
            </div>
        );
    }
}

export default Settings;
