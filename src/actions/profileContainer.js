import { START_LOADING_PICTURES_USER, SUCCESSFUL_LOADING_PICTURES_USER } from '.'



export const fetchProfile = (userId) => {
    return (dispatch) => {
         dispatch({type: START_LOADING_PICTURES_USER, payload: userId })
         return fetch(`http://localhost:3000/users/${userId}`)
        .then(res => res.json())
        .then((userJson) => {
              dispatch({
                  type: SUCCESSFUL_LOADING_PICTURES_USER,
                  payload: userJson
              })
          })
    
    }
}