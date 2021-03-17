import React from 'react'
// import { connect } from 'react-redux'
// import {fetchPictures} from './actions/fetchPictures'
import PicturesContainer from './container/PicturesContainer'
import ProfileContainer from './container/ProfileContainer.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
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
     <div className="space-x-4">
    <NavLink to="/login">
      <button className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold 
                           text-sm rounded" href="#">Log In</button>
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
              <Route exact path="/profile/user">
                  <ProfileContainer/>
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


