import {START_LOADING_PICTURE, SUCCESUFULY_LOADED_PICTURE_REVIEWS} from '../actions/index';



const initialState = {
  picturesLoaded: {},
  list: []  
}

export default function pictureReducer(state=initialState, action){
    switch (action.type){
        case START_LOADING_PICTURE:
            return {
                ...state,
                picturesLoaded: {
                    ...state.picturesLoaded, [action.payload]: "inProgress"
                },
            }
        case SUCCESUFULY_LOADED_PICTURE_REVIEWS:
            return {
                picturesLoaded:{
                    ...state.picturesLoaded,
                    [action.payload.picture.id]: "successful",
                },
                list: state.list
                .filter((review) => review.picture_id !== action.payload.picture.id)
                .concat(action.payload.reviews),
            };
            default:
               return state
    }
}