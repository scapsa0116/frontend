import {SUCCESSFULLY_CREATED_USER} from '.'

export const createUser = (formData) => {
    return( dispatch) => {
        return fetch(`http://localhost:3000/users`,{
            credentials: "include",
            method: 'POST',
            
            body: formData
        })
        .then(res => res.json())
        .then(usersJson => {
        dispatch({ 
            type: SUCCESSFULLY_CREATED_USER,
            payload: usersJson
        })
        })
  
    }
}