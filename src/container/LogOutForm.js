import React from "react";
import Logout from "../container/Logout";

class LogOutForm extends React.Component {
  logout = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((r) => r.json())
      .then((resp) => alert(resp.message));
    this.setState({
      currentUser: null,
      pictures: []
    });
  };

  render() {
    return (
      <div>
        <Logout logout={this.logout} />
      </div>
    );
  }
}

export default LogOutForm;
