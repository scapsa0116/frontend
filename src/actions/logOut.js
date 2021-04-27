import { SUCCESSFUL_LOG_OUT, NOT_AUTHENTICATED } from ".";

// export const logoutUser = (credentials) => {
//   return (dispatch) => {
//     return fetch("http://localhost:3001/logout", {
//       // credentials: "include",
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         currentUser: credentials
//       }
//     })
//       .then((res) => res.json())
//       .then((r) => {
//         alert(r.message);
//         if (r.ok) {
//           return dispatch({
//             type: SUCCESSFUL_LOG_OUT,
//             pyload: {
//               currentUser: null
//               // pictures: []
//             }
//           });
//         } else {
//           return dispatch({
//             type: NOT_AUTHENTICATED
//           });
//         }
//       });
//   };
// };

export const setCurrentUser = ({ user }) => {
  return {
    type: "SUCCESSFUL_LOG_OUT",
    user
  };
};

export const logoutUser = (userCredentials) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(setCurrentUser(resp));
        }
      })
      .catch(console.log);
  };
};
