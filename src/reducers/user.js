import {START_LOADING_USER, SUCCESSFUL_LOADED_PICTURES_USER} from '../actions/index'

const initialState = {
    usersLoaded: {},
    list: []  
  }

  export default function userReducer(state= initialState, action){
      switch (action.type){
          case START_LOADING_USER:
              return{
                  ...state,
                  usersLoaded: {
                      ...state.usersLoaded, [action.payload]: "inProgress"
                  },
              }
              case SUCCESSFUL_LOADED_PICTURES_USER:
                  return {
                    usersLoaded: {
                        ...state.usersLoaded, 
                        [action.payload.user.id]: "successful",
                    },
                    list: state.list
                    .filter((picture) => picture.user_id !== action.payload.user.id)
                    .concat(action.payload.pictures),
                  }
                  default:
                    return state
      }
  }