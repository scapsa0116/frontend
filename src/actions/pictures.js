import {
  START_LOADING_PICTURES,
  SUCCESUFULY_LOADED_PICTURES,
  START_LOADING_PICTURE,
  SUCCESUFULY_LOADED_PICTURE_REVIEWS,
  SUCCESSFUL_CREATED_PICTURE,
  SUCCESUFULY_LOADED_PICTURES_HOME
} from ".";

export const fetchPictures = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_PICTURES });
    fetch("http://localhost:3000/pictures", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((pictures) => {
        dispatch({
          type: SUCCESUFULY_LOADED_PICTURES,
          payload: pictures
        });
      });
  };
};

export const fetchPicture = (pictureId) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_PICTURE, payload: pictureId });
    fetch(`http://localhost:3000/pictures/${pictureId}`)
      .then((res) => res.json())
      .then((pictureReviewsJson) => {
        dispatch({
          type: SUCCESUFULY_LOADED_PICTURE_REVIEWS,
          payload: pictureReviewsJson
        });
      });
  };
};

export const fetchNewPicture = (picture) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/pictures`, {
      credentials: "include",
      method: "POST",

      body: picture
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: SUCCESSFUL_CREATED_PICTURE,
          payload: data
        });
      });
  };
};

export const fetchCurrentUserPic = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/home", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((picturesHome) => {
        if (picturesHome.error) {
          alert("Not autorized");
        } else {
          dispatch({
            type: SUCCESUFULY_LOADED_PICTURES_HOME,
            payload: picturesHome
          });
        }
      });
  };
};
