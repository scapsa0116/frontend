import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import picturesReducer from './reducers/pictures'

import{ createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
// import picturesReducer from './reducers/picturesReducer.js'

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    default:
      return state
  }
}


const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  pictures: picturesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
   
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
