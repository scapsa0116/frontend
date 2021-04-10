import {START_LOADING,SUCCESUFULY_LOADED_PICTURES} from './actions'



export const fetchPictures = () => {
return (dispatch) => {
    dispatch({type: START_LOADING})
    fetch("http://localhost:3000/", {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }

        })
        .then(res => res.json())
        .then(pictures =>  {
        dispatch({
            type:SUCCESUFULY_LOADED_PICTURES,
            payload: pictures
        })
        })
}
}