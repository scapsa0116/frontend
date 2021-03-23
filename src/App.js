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
// import ProfileContainer from './container/ProfileContainer.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    
   
  } from "react-router-dom";
class App extends React.Component {



    // componentDidMount(){
    //     this.props.fetchPictures()
    // }

render(){
  console.log("Im here")
  return (
    <div>
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
     
     <div className="lg:ml-4 lg:flex lg:items-center">
       
            <button
              className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
            
            <button
              className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                />
              </svg>
            </button>

            <button
              className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>

            <button
              className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

     </div>
     <div className="space-x-4">
    <NavLink to="/login">
      <button className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="#">
      Log In</button>
    </NavLink>
    <NavLink to="/signup">
      <button className="inline-block text-blue-500 font-semibold text-sm" href="#">Sign Up</button>
    </NavLink>
    </div> 
     </div>
     </nav> 

     
      
          <Switch>
              <Route exact path="/">
                  <PicturesContainer/>
              </Route>
              <Route exact path="/users/:userId" component={FetchUsersContainer}>
                  
              </Route>
              <Route exact path='/pictures/:pictureId' component={OnePicture}>
                {/* <OnePicture /> */}
              </Route>
              <Route path="/login">
              <LogIn/>
              </Route>
              <Route path="/signup">
              <SignUp/>
              </Route>
              <Route path ="/terms">
                <Terms/>
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


