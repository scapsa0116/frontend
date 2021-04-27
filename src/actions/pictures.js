import {
  START_LOADING_PICTURES,
  SUCCESUFULY_LOADED_PICTURES,
  START_LOADING_PICTURE,
  SUCCESUFULY_LOADED_PICTURE_REVIEWS,
  SUCCESSFUL_CREATED_PICTURE
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

export const fetchNewPicture = (body) => {
  return (dispatch) => {
    dispatch({ type: SUCCESSFUL_CREATED_PICTURE });
    fetch(`http://localhost:3000/pictures`, {
      credentials: "include",
      method: "POST",

      body: body
    })
      .then((res) => res.json())
      .then((pictureJson) => {
        this.props.history.push("/");
        console.log(pictureJson);
      });
  };
};
