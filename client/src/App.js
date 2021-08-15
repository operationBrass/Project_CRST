import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css';
import './App.css';


import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Post from './pages/post'


function App() {
  return (
      <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register} />
      <Route exact path="/post" component={Post} />
      </Router>
  );
}

export default App;
