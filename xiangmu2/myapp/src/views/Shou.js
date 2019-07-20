import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import {NavLink} from "react-router-dom"

import RouterView from "../router/RouterView"
import axios from 'axios'
import Cookie from 'js-cookie'

const { SubMenu } = Menu;
export default class Shou extends Component {
    state = {
        mode: 'inline',
        theme: 'dark',
        info1:{}
      };
    
      changeMode = value => {
        this.setState({
          mode: value ? 'vertical' : 'inline',
        });
      };
    
      changeTheme = value => {
        this.setState({
          theme: value ? 'light' : 'dark',
        });
      };
      
      componentDidMount(){
        axios.defaults.headers.common["authorization"] =Cookie.get("userName") 
        axios.get('http://localhost:3000/api/islogin').then((res)=>{
          this.setState({
            info1:res.data.info
          })  
        
        })
      }
      render() {
        return (
          <div className="ziba">
           <div className="warm">
            {/* <Switch onChange={this.changeMode} /> Change Mode
            <span className="ant-divider" style={{ margin: '0 1em' }} />
            <Switch onChange={this.changeTheme} /> Change Theme */}
            <br />
            <br />
            <Menu
              style={{ width: 300 ,height:750}}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode={this.state.mode}
              theme={this.state.theme}
            >
             <div className="tou">
                <dl>
                    <dt><img src={'http://localhost:3000'+this.state.info1.facePhoto} alt=""/></dt>
                    <dd>{this.state.info1.phone}</dd>
                </dl>
             
             </div>
              <Menu.Item  key="1">
                <Icon type="mail"  />
                <span><NavLink to="/shou/head">首页</NavLink></span>
                
              </Menu.Item>
              {/* <Menu.Item key="2">
                <Icon type="calendar" />
                Navigation Two
              </Menu.Item> */}
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>订单管理</span>
                  </span>
                }
              >
                <Menu.Item key="3"><NavLink to="/shou/dai">贷款订单</NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink to="/shou/zhuan">转单订单</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to="/shou/bao">保险订单</NavLink></Menu.Item>
                
                {/* <SubMenu key="sub1-2" title="Submenu">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                </SubMenu> */}
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>财务管理</span>
                  </span>
                }
              >
                {/* <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item> */}
              
              </SubMenu>
              <div className="dian">
                <button> 设置</button>
                <button> <NavLink to="/home">退出</NavLink></button>
            </div>
            </Menu>
         
               
          </div>
          <div className="right">
                {/* {console.log(this.props.children)} */}
                <RouterView routes = {this.props.children}/>
            </div>
          </div>
         
        );
      }
    
    }
    


