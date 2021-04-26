import React from "react";
import SignUp from "./container/SignUp.js";
import LogIn from "./container/LogIn.js";
import PicturesContainer from "./container/PicturesContainer";
import OnePicture from "./container/OnePicture.js";
import Terms from "./terms/terms.js";
import ProfileContainer from "./container/ProfileContainer.js";
import NewPicture from "./newPictures/NewPicture.js";
import Home from "./container/Home";
import Logout from "./container/Logout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./navBar/NavBar";
import GetPictures from "./container/GetPictures";
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     loginForm: {
  //       name: "",
  //       email: "",
  //       password: ""
  //     },
  //     pictures: []
  //   };
  // }

  // componentDidMount() {
  //   this.props.getCurrentUser();
  // }

  // handleLoginFormChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     loginForm: {
  //       ...this.state.loginForm,
  //       [name]: value
  //     }
  //   });
  // };

  // handleLoginFormSubmit = (event) => {
  //   event.preventDefault();

  //   const userInfo = this.state.loginForm;

  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: userInfo
  //     })
  //   })
  //     .then((res) => res.json())
  //     .then((resp) => {
  //       if (resp.error) {
  //         alert("Invalid credentials");
  //       } else {
  //         this.setState({
  //           currentUser: resp.user,
  //           loginForm: {
  //             name: "",
  //             email: "",
  //             password: ""
  //           }
  //         });
  //       }
  //     })
  //     .catch(console.log);
  // };

  // logout = (event) => {
  //   event.preventDefault();
  //   fetch("http://localhost:3000/logout", {
  //     credentials: "include",
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then((r) => r.json())
  //     .then((resp) => alert(resp.message));
  //   this.setState({
  //     currentUser: null,
  //     pictures: []
  //   });
  // };

  // getPictures = () => {
  //   // const token = localStorage.getItem("token")
  //   fetch("http://localhost:3000/home", {
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then((resp) => resp.json())
  //     .then((pictures) => {
  //       if (pictures.error) {
  //         alert("Not autorized");
  //       } else {
  //         this.setState({
  //           pictures
  //         });
  //       }
  //     });
  // };

  render() {
    return (
      <div>
        <NavBar />

        <Router>
          <Switch>
            <Route exact path='/'>
              <PicturesContainer />
            </Route>

            <Route exact path='/logout'>
              <Logout logout={this.logout} />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route
              exact
              path='/users/:userId'
              component={ProfileContainer}
            ></Route>

            <Route
              exact
              path='/pictures/:pictureId'
              component={OnePicture}
            ></Route>
            <Route exact path='/home'>
              <GetPictures />
            </Route>

            {/* <Route path='/login'>
              <LogIn
                handleLoginFormChange={this.handleLoginFormChange}
                handleLoginFormSubmit={this.handleLoginFormSubmit}
                name={this.state.loginForm.name}
                email={this.state.loginForm.email}
                password={this.state.loginForm.password}
              />
            </Route> */}

            <Route exact path='/signup'>
              <SignUp />
            </Route>

            <Route path='/terms'>
              <Terms />
            </Route>

            <Route
              exact
              path='/users/:userId/pictures/new'
              component={NewPicture}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.currentUser
//   };
// };

export default App;
