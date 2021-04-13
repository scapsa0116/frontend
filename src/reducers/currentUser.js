import {SUCCESSFULLY_CREATED_USER, SET_CURRENT_USER} from '../actions'


export const currentUserReducer = (state = null, action) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return action.user
      default:
        return state
    }
    
  }



  const initialState = {
    // loadingState: 'notStarted',
    list: []
  }

  export const newUserReducer = (state= initialState, action) => {
    switch (action.type){
      case SUCCESSFULLY_CREATED_USER:
      return {
        ...state,
        list: state.list.concat(action.payload.user)
      }
      default:
        return state

    }

  }