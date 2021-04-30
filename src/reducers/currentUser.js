import {
  SUCCESSFULLY_CREATED_USER,
  SET_CURRENT_USER,
  LOADING_LOGIN_FORM,
  SUCCESSFUL_LOGGEDIN,
  SUCCESSFUL_LOG_OUT
} from "../actions";

export const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

const initialState = {
  usersLoaded: {},
  list: [],
  currentUser: {}
};

export const newUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESSFULLY_CREATED_USER:
      return {
        ...state,
        list: state.list.concat(action.payload.user)
      };
    case LOADING_LOGIN_FORM:
      return {
        ...state,
        currentUser: action.payload,
        formSubmitted: false // after update user formsubmition reset
      };
    case SUCCESSFUL_LOGGEDIN:
      return {
        ...state,
        currentUser: action.payload
      };
    case SUCCESSFUL_LOG_OUT:
      // debugger;
      return {
        ...state,
        currentUser: {}
      };

    default:
      return state;
  }
};
