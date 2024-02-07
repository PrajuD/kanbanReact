import React from 'react'
import ReactDOM from 'react-dom'
import {  legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import reducers from './redux/reducers'
import App from './components/App'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
