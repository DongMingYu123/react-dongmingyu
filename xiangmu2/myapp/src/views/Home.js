import React, { Component } from 'react'
import img from "../img/1.gif"
// import {NavLink} from "react-router-dom"
import axios from 'axios'
import Cookie from 'js-cookie'
export default class Home extends Component {
    state = {
        phone:"",
        pasd:"",
        yan:"",
        qin:""
    }
    render() {
        return (
            <div className="wrap">
                <div className="zhong">
                    <div className="left">
                    <h1>Welcome</h1>
                    <span>转转金融 开创信贷“1 + N”模式的综合互联网金融服务共享平台</span>
                    </div>
                    <div className="right">
                     <div className="hun">
                        <dl>
                            <dt><img src={img} alt=""/></dt>
                            <dd>转转金融渠道管理系统</dd>
                        </dl>
                     </div>
                     <div className="shu">
                        <input type="text" placeholder="请输入手机号" onChange={(e)=>{
                            this.setState({
                                phone:e.target.value
                            })
                        }}/>
                        <input type="password" placeholder="请输入密码" onChange={(e)=>{
                            this.setState({
                                pasd:e.target.value
                            })
                        }}/>
                        <p>
                           
                        <input type="text" placeholder='验证码琴琴' onChange={(e)=>{
                            this.setState({
                                qin:e.target.value
                            })
                        }}/>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            axios.get('http://localhost:3000/api/checkCode').then((res)=>{
                                this.setState({
                                    yan: res.data.Verification
                                })    
                           
                            })
                        }}>获取验证码</button> <span >{this.state.yan}</span>
                       
                       
                        </p>
                        <div className="deng">
                        <button onClick={()=>{
                            axios.defaults.headers.common["authorization"] =Cookie.get("userName") 
                            axios.post('http://localhost:3000/api/login',{phone:this.state.phone,password:this.state.pasd,checkcode:this.state.qin}).then((res)=>{
                                if(res.data.code){
                                    return ;
                                }else{
                                    Cookie.set('userName',res.data.sessionId)
                                    this.props.history.push('/shou')
                                }
                            })
                        }}>登录</button>

                        </div>
                     
                     </div>
                    </div>
                
                
                </div>
            </div>
        )
    }
}
