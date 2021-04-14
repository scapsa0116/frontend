import {START_LOADING_USERS, SUCCESSFUL_LOADED_USERS, START_LOADING_PICTURES_USER, SUCCESSFUL_LOADED_PICTURES_USER } from '.'





export const fetchUsers = () => {
    return (dispatch) => {
         dispatch({type: START_LOADING_USERS})
         fetch("http://localhost:3000/users/", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    
            })
            .then(res => res.json())
            .then(users =>  {
            dispatch({
                type: SUCCESSFUL_LOADED_USERS,
                payload: users
            })
            })
    
    }
}







export const fetchUser = (userId) => {
    return (dispatch) => {
         dispatch({type: START_LOADING_PICTURES_USER, payload: userId })
         return fetch(`http://localhost:3000/users/${userId}`)
        .then(res => res.json())
        .then((userPicturesJson) => {
              dispatch({
                  type: SUCCESSFUL_LOADED_PICTURES_USER,
                  payload: userPicturesJson
              })
          })
    
    }
}