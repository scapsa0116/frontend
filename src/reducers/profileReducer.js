import { START_LOADING_PICTURES_USER, SUCCESSFUL_LOADING_PICTURES_USER } from '../actions/'


const initialState = {
    usersLoaded: {},
    list: [],
  }


  export default function profileReducer(state=initialState, action){
      switch(action.type) {
          case SUCCESSFUL_LOADING_PICTURES_USER:
          return {
              usersLoaded: {
                  ...state.usersLoaded,
                  [action.payload.user.id]: 'successful',
              },
              list: state.list
              .filter((picture) => picture.user_id !== action.payload.user.id)
              .concat(action.payload.pictures),
          }
          default:
             return state
      }
  }