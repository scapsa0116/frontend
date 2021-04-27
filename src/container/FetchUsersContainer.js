import React from "react";
import UsersList from "../container/UsersList.js";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userPictures";

class FetchUsersContainer extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchUsers();
  }

  render() {
    if (this.props.loadingState === "notStarted") {
      return null;
    }
    return (
      <div>
        {this.props.loadingState === "inProgress" ? (
          "animate-spin"
        ) : (
          <UsersList users={this.props.users} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingState: state.users.loadingState,
    usersPictures: state.users.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchUsersContainer);
