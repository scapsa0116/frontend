import React from 'react'
import FetchUsersContainer from './container/FetchUsersContainer.js'
import SignUp from './container/SignUp.js'
import LogIn from './container/LogIn.js'
import PicturesContainer from './container/PicturesContainer'
import OnePicture from './container/OnePicture.js'
import Terms from './terms/terms.js'
import ProfileContainer from './container/ProfileContainer.js'
import NewPicture from './newPictures/NewPicture.js'
import Home from './container/Home'
import Logout from './container/Logout'
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
class App extends React.Component {

  constructor(){
    super()
    this.state = {
        loginForm: {
          name: "",
          email: "",
          password: ""
        },
        pictures: []
    }
}

componentDidMount(){
  this.props.getCurrentUser()
  }
  

handleLoginFormChange = (event) => {
const {name, value } = event.target
this.setState({
  loginForm: {
    ...this.state.loginForm,
    [name]: value
  }
})
}

handleLoginFormSubmit = event => {
  event.preventDefault()

  const userInfo = this.state.loginForm

  const headers = {
    method: 'POST',
    credentials: "include",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      user: userInfo
    })
  }
  

  fetch("http://localhost:3000/login", headers )
  .then(res => res.json())
  .then(resp =>{
    if (resp.error) {
      alert("Invalid credentials")

    }else{
      this.setState({
        currentUser: resp.user,
        loginForm: {
          name: "",
          email: "",
          password: ""
        }
      })
    }
})
  .catch(console.log)
  
}

logout=(event) => {
  event.preventDefault()
  fetch("http://localhost:3000/logout",{
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(r => r.json())
  .then(resp => alert(resp.message))
  this.setState({
    currentUser: null,
    pictures: []
  })
}

getPictures = () => {
  // const token = localStorage.getItem("token")
  fetch("http://localhost:3000/home",{
    credentials: "include",
    headers:{
     "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(pictures => {
    if(pictures.error){
      alert("Not autorized")
    }else {
      this.setState({
        pictures
      })
    }
  })
}











render(){
  const {currentUser} = this.props
  return (
    <div>
      <h2>
        {currentUser ? `:Logged in as ${currentUser.name}` : "Not Loged In"}
      </h2>

   




    <Router>
     <nav className="border-b px-4 py-2 bg-white">
     <div className="flex flex-wrap items-center justify-between md:justify-around">
    <NavLink to="/">
     <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="instagram" />
    </NavLink>
     <div className="relative hidden sm:block text-gray-500">
     <input className="search-bar max-w-xs border rounded bg-gray-200 px-4
            text-center outline-none focus:border-gray-400" type="search" placeholder="Search"/> 
     <i className="fa fa-search absolute top-0 left-0 ml-12 mt-1"></i>      
     </div>
     <div className="space-x-4">
       <NavLink to="/home">

       <button onClick={this.getPictures} className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="#">Show user Pictures</button>
       </NavLink>
    <NavLink to="/login">
      <button className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="#">
      Log In</button>
    </NavLink>
    <NavLink to="/signup">
      <button className="inline-block text-blue-500 font-semibold text-sm" href="#">Sign Up</button>
    </NavLink>
    <NavLink to="/logout">
    <button className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="#"> Log Out</button>
    </NavLink>
    </div> 
     </div>
     </nav> 

     
      
          <Switch>
              <Route exact path="/">
                  <PicturesContainer/>
              </Route>

              <Route exact path="/logout">
                  <Logout logout={this.logout}/>
              </Route>

              <Route path="/home">
                  <Home pictures = {this.state.pictures}
                        currentUser= {this.state}/>
              </Route>
              
              <Route exact path="/users/:userId" component={ProfileContainer}>
              </Route>

              <Route exact path="/users/:userid" component={FetchUsersContainer}>
              </Route>

              <Route exact path='/pictures/:pictureId' component={OnePicture}>
              </Route>

              <Route path="/login">
                  <LogIn
                  handleLoginFormChange={this.handleLoginFormChange}
                  handleLoginFormSubmit={this.handleLoginFormSubmit}
                  name = {this.state.loginForm.name}
                  email = {this.state.loginForm.email}
                  password = {this.state.loginForm.password}
                  />
              </Route>

              <Route path="/signup">
                 <SignUp/>
              </Route>

              <Route path ="/terms">
                  <Terms/>
              </Route>

              <Route exact path="/pictures/new/create">
                <NewPicture/>
              </Route>
              
          </Switch>
      </Router>
      </div>
  )
}
  
}

const mapStateToProps = (state) => {
  return {
      currentUser: state.currentUser
  } 
}

export default  connect(mapStateToProps, {getCurrentUser: getCurrentUser})(App);


