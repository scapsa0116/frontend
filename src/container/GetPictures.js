import React from "react";
import Home from "../container/Home";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/currentUser.js";
import { fetchCurrentUserPic } from "../actions/getPictures.js";

class GetPictures extends React.Component {
  componentDidMount() {
    // this.props.getCurrentUser();
    this.props.dipatchUserPictures();
    this.props.dispatchGetCurrentUser();
  }

  render() {
    return (
      <div>
        <Home pictures={this.props.pictures} currentUser={this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    pictures: state.pictures.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetCurrentUser: () => dispatch(getCurrentUser()),
    dipatchUserPictures: () => dispatch(fetchCurrentUserPic())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetPictures);
