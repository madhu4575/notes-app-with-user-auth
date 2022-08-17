import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store/configureStore'
import { startGetUser } from './actions/addUser'
// import { startUserLogin } from './actions/addUser'

const store = configureStore()
console.log('state',store.getState())
store.subscribe(() => {
  console.log('state update',store.getState())
})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,document.getElementById('root')
)