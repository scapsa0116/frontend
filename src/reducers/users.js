import {START_LOADING_USERS, SUCCESSFUL_LOADED_USERS, SUCCESSFUL_LOADED_PICTURES_USER } from '../actions'


const initialState = {
    loadingState: 'notStarted', 
    list: []
}

export function usersReducer(state = initialState, action){
    switch (action.type){
            case START_LOADING_USERS:
                return {...state, loadingState: 'inProgress'};
                case SUCCESSFUL_LOADED_USERS:
                    return {
                        list: action.payload,
                        loadingState: "successful",
                    };
                    case SUCCESSFUL_LOADED_PICTURES_USER:
                        const foundUser = state.list.find(user => user.id == action.payload.user.id)
                        if (foundUser){
                            return state    
                        }else {
                            return {
                                ...state, 
                                list: state.list
                                .filter((user) => user.id !== action.payload.user.id)
                                .concat(action.payload.user),
                            }
                        }
                    default: 
                        return state
    }
}
