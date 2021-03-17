import { combineReducers } from 'redux'

const picturesReducer = () => {
return [
    // {list of pictures }
]
}


const selectedPictureReducer = (selectedPicture = null, action) => {
    if (action.type === 'PICTURE_SELECTED'){
        return action.payload;
    }
    return selectedPicture;
}


export default combineReducers({
    picture: picturesReducer,
    selectedPicture: selectedPictureReducer
})
