import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router} from 'react-router-dom'
import Wrapper from './components/Context/Wrapper'
//require('dotenv').config()


import reducer from './store/reducer'
// import reducer from './store/combineReducers' // combineReducers.txt
import {createStore} from 'redux'
import {Provider} from 'react-redux'

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // this line use for DEV remove!! for production


ReactDOM.render(
  <Wrapper>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </Wrapper>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
