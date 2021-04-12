import {START_LOADING_PICTURES, SUCCESUFULY_LOADED_PICTURE_REVIEWS, SUCCESUFULY_LOADED_PICTURES} from '../actions'


const initialState = {
    loadingState: 'notStarted' || 'inProgress' || 'loaded', 
    list: []
}


export default function picturesReducer(state = initialState, action){
switch (action.type){
case START_LOADING_PICTURES:
    return {...state, loadingState: 'inProgress'};
    case SUCCESUFULY_LOADED_PICTURES:
        return {
            list: action.payload,
            loadingState: "successful",
        };
        case SUCCESUFULY_LOADED_PICTURE_REVIEWS:
            const foundPicture = state.list.find(picture => picture.id == action.payload.picture.id)
           if (foundPicture){
               return state 
           }else {
               return {
                   ...state,
                   list: state.list.concat(action.payload.picture),
               }
           }
    default:
        return state
}

}