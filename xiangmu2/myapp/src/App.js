import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import RouterView from "./router/RouterView"
import {routes} from "./router/routerConfig"
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <RouterView routes={routes}/>
      </BrowserRouter>

    )
  }




}

export default App;
