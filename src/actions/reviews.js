import { SUCCESSFULLY_CREATED_REVIEW } from "."

export const createReview = (formData) => {
    return (dispatch => {
        return fetch(`http://localhost:3000/reviews`,{
            credentials: "include",
             method: 'POST',
             body: formData
         })
           
         .then(res => res.json())
           .then(comment => {
            dispatch({
                type: SUCCESSFULLY_CREATED_REVIEW,
                payload: comment
               })
           })
     
    })
}
