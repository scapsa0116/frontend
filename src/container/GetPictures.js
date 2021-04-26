import React from "react";
import Home from "../container/Home";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/currentUser.js";

class GetPictures extends React.Component {
  constructor() {
    super();
    this.state = {
      loginForm: {
        name: "",
        email: "",
        password: ""
      },
      pictures: []
    };
  }

  componentDidMount() {
    this.props.getCurrentUser();

    // const token = localStorage.getItem("token")
    fetch("http://localhost:3000/home", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((pictures) => {
        console.log(pictures);
        if (pictures.error) {
          alert("Not autorized");
        } else {
          this.setState({
            pictures
          });
        }
      });
  }

  render() {
    return (
      <div>
        <Home pictures={this.state.pictures} currentUser={this.state} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { getCurrentUser: getCurrentUser })(
  GetPictures
);
