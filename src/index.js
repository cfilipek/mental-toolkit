import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(<div>Loading...</div>, document.getElementById('root'))

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


