import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux"
import {Provider} from "react-redux"
import "./index.css"
const reducer= (state = [], action)=>{
  switch (action.type) {
    case "add":
        return state.concat(action.content)
      break;
    case "remove":
        return state.filter((data,index) => index !== action.content)
      break;
    default:
      return state
      break;
  }


}
const store = createStore(reducer)




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
