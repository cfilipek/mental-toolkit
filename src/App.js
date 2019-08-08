import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './layout/Layout'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './components/Home';
import Toolkit from './components/Toolkit';
import Join from './components/Join';



//layout controls my navbar and the rest of the page items that are sent down as props

//if it doesn't match routes it will go home

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/toolkit' component={Toolkit}></Route>
        <Route path='/whyjoin' component={Join}></Route>
        <Redirect to='/' component={Home}/>
      </Switch>
    </Layout>
    )
}

export default App
