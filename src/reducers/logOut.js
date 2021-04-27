import { SUCCESSFUL_LOG_OUT, NOT_AUTHENTICATED } from "../actions/index";

const initialState = {
  currentUser: {}
};

export default function logOutReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESSFUL_LOG_OUT:
      return {
        ...state,
        currentUser: {}
      };

    default:
      return state;
  }
}
