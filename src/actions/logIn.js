import { LOADING_LOGIN_FORM } from ".";
import { Redirect } from "react-router";

export const setCurrentUser = ({ user }) => {
  return {
    type: "SUCCESSFUL_LOGGEDIN",
    user
  };
};

export const fetchLogInForm = (credentials) => {
  // const { name, email, password } = userInfo;
  return (dispatch) => {
    dispatch({ type: LOADING_LOGIN_FORM });
    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        user: credentials
      })
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.error) {
          alert("Invalid credentials");
        } else {
          dispatch(setCurrentUser(resp));
        }
        <Redirect to='/' />;
      })
      .catch(console.log);
  };
};
