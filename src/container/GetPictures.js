import React from "react";
import Home from "../container/Home";
import { Link } from "react-router-dom";

class GetPictures extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  getPictures = () => {
    // const token = localStorage.getItem("token")
    fetch("http://localhost:3000/home", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((pictures) => {
        if (pictures.error) {
          alert("Not autorized");
        } else {
          this.setState({
            pictures
          });
        }
      });
  };

  render() {
    return (
      <li>
        <Link to='/home'>
          <Home pictures={this.state.pictures} currentUser={this.state} />
        </Link>
      </li>
    );
  }
}

export default GetPictures;
