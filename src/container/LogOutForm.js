import React from "react";
import Logout from "../container/Logout";
import { connect } from "react-redux";
import { logoutUser } from "../actions/currentUser";

class LogOutForm extends React.Component {
  logout = (event) => {
    event.preventDefault();
    // fetch("http://localhost:3000/logout", {
    //   credentials: "include",
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then((r) => r.json())
    //   .then((resp) => alert(resp.message));
    // this.setState({
    //   currentUser: null,
    //   pictures: []
    // });
    // // localStorage.removeItem("token");
    this.props.dispatchLogoutUser();
  };

  render() {
    return (
      <div>
        <Logout logout={this.logout} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logOutCurrentUser: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogoutUser: (body) => dispatch(logoutUser(body))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOutForm);
