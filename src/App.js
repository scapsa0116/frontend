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
import LogInForm from "./container/LogInForm";
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
import LogOutForm from "./container/LogOutForm";

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
        {/* <h2>
            {currentUser ? `Welcome ${currentUser.name}` : "Not Loged In"}
          </h2> */}
        <Router>
          <div className='border-b px-4 py-2 bg-white'>
            <div className='flex flex-wrap items-center justify-between md:justify-around'>
              <NavLink to={"/"}>
                <img
                  className='h-10'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png'
                  alt='instagram'
                />
              </NavLink>

              <div className='relative hidden sm:block text-gray-500'>
                <input
                  className='search-bar max-w-xs border rounded bg-gray-200 px-4
            text-center outline-none focus:border-gray-400'
                  type='search'
                  placeholder='Search'
                />

                {/* <i className="fa fa-search absolute top-0 left-0 ml-12 mt-1"></i>       */}
              </div>

              <div className='space-x-4'>
                <NavLink to={"/users/:userId/pictures/new"}>
                  {/* <button className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="#">Pic</button> */}
                  <button className='inline-block bg-green-500 px-2 py-1 text-white font-semibold text-sm rounded'>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z' />
                    </svg>
                  </button>
                </NavLink>

                <NavLink to={"/home"}>
                  {/* <button  className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="#">Home</button> */}

                  <button className='inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded'>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                    </svg>
                  </button>
                </NavLink>

                <NavLink to={"/login"}>
                  <button
                    className='inline-block text-blue-500 font-semibold text-sm'
                    href='#'
                  >
                    Log In
                  </button>
                </NavLink>

                <NavLink to={"/signup"}>
                  <button
                    className='inline-block text-blue-500 font-semibold text-sm'
                    href='#'
                  >
                    Sign Up
                  </button>
                </NavLink>

                <NavLink to={"/logout"}>
                  <button
                    className='inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded'
                    href='#'
                  >
                    {" "}
                    Log Out
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path='/'>
              <PicturesContainer />
            </Route>

            {/* <Route exact path='/logout'>
              <Logout logout={this.logout} />
            </Route> */}

            <Route exact path='/logout'>
              <LogOutForm />
            </Route>

            <Route path='/home'>
              <GetPictures />
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

            <Route path='/login'>
              <LogInForm />
            </Route>

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
