import {ALL_PICTURES,START_LOADING,FAILD_LOADIN_PICTURES,SUCCESUFULY_LOADED_PICTURES} from '../actions'


const initialState = {
    loadingState: "nonStarted", 
    list: []
}


export default function picturesReducer(state = initialState, action){
switch (action.type){
case START_LOADING:
    return {...state, loadingState: 'In Progress'};
    case SUCCESUFULY_LOADED_PICTURES:
        return {
            list: action.payload,
            loadingState: "succesuful"
        }
    default:
        return state
}

}