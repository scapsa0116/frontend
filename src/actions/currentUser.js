import {
  LOADING_LOGIN_FORM,
  SUCCESSFUL_LOG_OUT,
  SUCCESSFULLY_CREATED_USER,
  START_LOADING_USERS,
  SUCCESSFUL_LOADED_USERS,
  START_LOADING_PICTURES_USER,
  SUCCESSFUL_LOADED_PICTURES_USER
} from ".";

export const setCurrentUser = ({ user }) => {
  return {
    type: "SET_CURRENT_USER",
    user
  };
};

export const getCurrentUser = (userCredentials) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/get_current_user", {
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
          console.log(resp);
          dispatch(setCurrentUser(resp));
        }
      })
      .catch(console.log);
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
      })
      .catch(console.log);
  };
};

export const logoutUser = (currentUser) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/logout", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: currentUser
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        if (resp.error) {
        } else {
          dispatch({
            type: SUCCESSFUL_LOG_OUT,
            payload: (resp = {})
          });
        }
      })
      .catch(console.log);
  };
};

export const createUser = (formData) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/users`, {
      credentials: "include",
      method: "POST",

      body: formData
    })
      .then((res) => res.json())
      .then((usersJson) => {
        dispatch({
          type: SUCCESSFULLY_CREATED_USER,
          payload: usersJson
        });
      });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_USERS });
    fetch("http://localhost:3000/users/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((users) => {
        dispatch({
          type: SUCCESSFUL_LOADED_USERS,
          payload: users
        });
      });
  };
};

export const fetchUser = (userId) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_PICTURES_USER, payload: userId });
    return fetch(`http://localhost:3000/users/${userId}`)
      .then((res) => res.json())
      .then((userPicturesJson) => {
        dispatch({
          type: SUCCESSFUL_LOADED_PICTURES_USER,
          payload: userPicturesJson
        });
      });
  };
};
