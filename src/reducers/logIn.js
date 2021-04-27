import { LOADING_LOGIN_FORM, SUCCESSFUL_LOGGEDIN } from "../actions";

const initialState = {
  currentUser: {}
};

export default function LogInReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
