export const setCurrentUser = ({user}) => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


export const getCurrentUser = userCredentials => {
    return dispatch => {
        return fetch("http://localhost:3000/get_current_user", {
            credentials: "include",
            headers: {
              "Content-Type" : "application/json"
            }
            
        })
        .then(res => res.json())
        .then(resp => {
          if (resp.error) {
          alert(resp.error)
          }else{
          dispatch(setCurrentUser(resp))
          }
        })
        .catch(console.log)
      }
    
}