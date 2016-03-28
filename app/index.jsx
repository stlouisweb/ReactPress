import 'bootstrap/less/bootstrap.less';
import './main.less';
import './assets/font-awesome/css/font-awesome.css'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Login from './components/Login'
import Validate from './components/Validate'
import Posts from './components/Posts'
import { Router, Route, hashHistory } from 'react-router'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/login" component={Login}/>
      <Route path="/validate" component={Validate}/>
      <Route path="/posts" component={Posts}/>
    </Route>
  </Router>
), document.getElementById('app'))
