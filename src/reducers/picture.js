import {
  START_LOADING_PICTURE,
  SUCCESUFULY_LOADED_PICTURE_REVIEWS,
  SUCCESSFULLY_CREATED_REVIEW,
  SUCCESSFUL_CREATED_PICTURE
} from "../actions/index";

const initialState = {
  picturesLoaded: {},
  list: []
};

export default function pictureReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_PICTURE:
      return {
        ...state,
        picturesLoaded: {
          ...state.picturesLoaded,
          [action.payload]: "inProgress"
        }
      };
    case SUCCESUFULY_LOADED_PICTURE_REVIEWS:
      return {
        picturesLoaded: {
          ...state.picturesLoaded,
          [action.payload.picture.id]: "successful"
        },
        list: state.list
          .filter((review) => review.picture_id !== action.payload.picture.id)
          .concat(action.payload.reviews)
      };
    case SUCCESSFULLY_CREATED_REVIEW:
      return {
        ...state,
        list: state.list.concat(action.payload)
      };

    default:
      return state;
  }
}
