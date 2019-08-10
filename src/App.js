import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './layout/Layout'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './components/Home';
import Toolkit from './components/Toolkit';
import Join from './components/Join';
import {connect} from 'react-redux'
import Logout from './components/Logout';
import Community from './components/Community';



//layout controls navbar and the rest of the page items that are sent down as props

//if it doesn't match routes it will go home

const App = ({loggedIn}) => {
  console.log(loggedIn)

  let routes;
  if(loggedIn){
    routes = (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/toolkit' component={Toolkit}></Route>
        {/* <Route path='/toolkit:id' component={SingleToolkit}></Route> */}
        <Route path='/about' component={About}></Route>
        <Route path='/whyjoin' component={Join}></Route>
        <Route path='/community' component={Community}></Route>
        <Route path='/logout' component={Logout}></Route>
        <Redirect to='/' component={Home}/>
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route path='/whyjoin' component={Join}></Route>
        <Redirect to='/' component={Home}/>
      </Switch>
    )
  }

  return (
    <Layout>
        {routes}
    </Layout>
    )
}

const mapStateToProps = ({firebase}) => ({
  loggedIn: firebase.auth.uid ? true : null,
})


export default connect(mapStateToProps, null) (App)
