import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './layout/Layout'



//layout controls my navbar and the rest of the page items that are sent down as props

//if it doesn't match routes it will go home

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'></Route>
        <Route path='/toolkit'></Route>
        <Redirect to='/' />
      </Switch>
    </Layout>
    )
}

export default App
