import React, { Component } from 'react'
import Login from './pages/Login'
import Test from './pages/Test'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
var ReactDOM = require('react-dom');

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Login} /> 
        <Route path='/test' component={Test} />          
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;