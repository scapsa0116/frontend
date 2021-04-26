import React from "react";
import LogIn from "../container/LogIn.js";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/currentUser.js";

class LogInForm extends React.Component {
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
  }

  handleLoginFormChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    });
  };

  handleLoginFormSubmit = (event) => {
    event.preventDefault();

    const userInfo = this.state.loginForm;

    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.error) {
          alert("Invalid credentials");
        } else {
          this.setState({
            currentUser: resp.user,
            loginForm: {
              name: "",
              email: "",
              password: ""
            }
          });
        }
      })
      .catch(console.log);
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <h2>{currentUser ? `Welcome ${currentUser.name}` : "Not Loged In"}</h2>
        <LogIn
          handleLoginFormChange={this.handleLoginFormChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          name={this.state.loginForm.name}
          email={this.state.loginForm.email}
          password={this.state.loginForm.password}
        />
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
  LogInForm
);
