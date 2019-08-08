import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'
import Loader from './components/Loader'

ReactDOM.render(<Loader/>, document.getElementById('root'))

//http://react-redux-firebase.com/docs/recipes/auth.html
store.firebaseAuthIsReady.then(()=> {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
})


