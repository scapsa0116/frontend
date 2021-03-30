import React from 'react'
// import IndividualPicture from './container/IndividualPicture.js'
// import { connect } from 'react-redux'
// import {fetchPictures} from './actions/fetchPictures'
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

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    
   
  } from "react-router-dom";
class App extends React.Component {

  constructor(){
    super()
    this.state = {
        currentUser: null,
        loginForm: {
          name: "",
          email: "",
          password: ""
        },
        pictures: []
    }
}

componentDidMount(){
  const token = localStorage.getItem("token")
  if (token) {
    fetch("http://localhost:3000/get_current_user", {
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(resp => {
      if (resp.error) {
       alert(resp.error)
      }else{
       this.setState({
         currentUser: resp.user
       })
      }
    })
    .catch(console.log)
  }
  
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
      localStorage.setItem('token',resp.jwt)
    }
})
  .catch(console.log)
  
}

logout=(event) => {
  event.preventDefault()
  localStorage.removeItem("token")
  this.setState({
    currentUser: null,
    pictures: []
  })
}

getPictures = () => {
  const token = localStorage.getItem("token")
  fetch("http://localhost:3000/pictures",{
    headers:{
      "Authorization":token
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
  console.log("Im here")
  const {currentUser} = this.state
  return (
    <div>
      <h2>
        {currentUser ? `:Logged in as ${currentUser.name}` : 
        "Not Loged In"
         }
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
       <button onClick={this.getPictures}>Show user Pictures</button>
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
              <Home pictures = {this.state.pictures}/>
              </Route>
              
              <Route exact path="/users/:userId" component={ProfileContainer}>
              </Route>
              <Route exact path="/users/:userid" component={FetchUsersContainer}>
              </Route>
              <Route exact path='/pictures/:pictureId' component={OnePicture}>
                {/* <OnePicture /> */}
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

// const mapStateToProps = (state) => {
//   return {
//       pictures: state.pictures
//   } 
// }

export default App;


