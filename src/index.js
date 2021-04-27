import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import picturesReducer from "./reducers/pictures";
import { currentUserReducer } from "./reducers/currentUser";
import pictureReducer from "./reducers/picture";
import { newUserReducer } from "./reducers/currentUser";
import { usersReducer } from "./reducers/users";
import userReducer from "./reducers/user";
import LogInReducer from "./reducers/logIn";
import logOutReducer from "./reducers/logOut";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  pictures: picturesReducer,
  reviews: pictureReducer,
  users: newUserReducer,
  usersList: usersReducer,
  userPictures: userReducer,
  auth: LogInReducer,
  logOut: logOutReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
