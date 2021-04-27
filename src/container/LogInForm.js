import React from "react";
import LogIn from "../container/LogIn.js";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/currentUser.js";
import { fetchLogInForm } from "../actions/logIn";

class LogInForm extends React.Component {
  componentDidMount() {
    this.props.dispatchGetCurrentUser();
  }

  // handleLoginFormChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     loginForm: {
  //       ...this.state.loginForm,
  //       [name]: value
  //     }
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;
    this.props.dispatchLoginUser({ name, email, password });

    // .then(() => this.props.history.push("/"))
    // .catch(() => this.setState({ error: true }));
  };

  // const userInfo = this.props.loginForm;
  // this.props.dispatchLogInCurrentUser(userInfo);

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

  render() {
    const { currentUser } = this.props;
    return (
      <div className='bg-grey-lighter min-h-screen flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='name'
                id='name'
                onChange={this.handleChange}
                value={this.props.name}
                placeholder='name'
              />

              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='email'
                id='email'
                onChange={this.handleChange}
                value={this.props.email}
                placeholder='Email'
              />

              <input
                type='password'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='password'
                id='password'
                onChange={this.handleChange}
                value={this.props.password}
                placeholder='Password'
              />

              <button
                type='submit'
                value='Login'
                className='w-full text-center py-3 rounded h-10 px-5 m-2 duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700 text-purple-100'
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetCurrentUser: () => dispatch(getCurrentUser()),
    dispatchLoginUser: (credentials) => dispatch(fetchLogInForm(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
