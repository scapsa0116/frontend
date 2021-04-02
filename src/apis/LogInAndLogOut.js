// import React from 'react'
// import { Link, Route } from 'react-router-dom'
// import Home from '../container/Home'
// import Logout from '../container/Logout'
// import LogIn from '../container/LogIn.js'
// import {connect} from 'react-redux'
// import { getCurrentUser } from '../actions/currentUser.js'


// class LogInAndLogOut extends React.Component {


//     constructor(){
//         super()
//         this.state = {
//             currentUser: null,
//             loginForm: {
//               name: "",
//               email: "",
//               password: ""
//             },
//             pictures: []
//         }
//     }


//     componentDidMount(){
//         this.props.getCurrentUser()
//     }
        
      
//       handleLoginFormChange = (event) => {
//       const {name, value } = event.target
//       this.setState({
//         loginForm: {
//           ...this.state.loginForm,
//           [name]: value
//         }
//       })
//       }
      
//       handleLoginFormSubmit = event => {
//         event.preventDefault()
      
//         const userInfo = this.state.loginForm
      
//         const headers = {
//           method: 'POST',
//           credentials: "include",
//           headers: {
//             "content-type": "application/json"
//           },
//           body: JSON.stringify({
//             user: userInfo
//           })
//         }
        
      
//         fetch("http://localhost:3000/login", headers )
//         .then(res => res.json())
//         .then(resp =>{
//           if (resp.error) {
//             alert("Invalid credentials")
      
//           }else{
//             this.setState({
//               currentUser: resp.user,
//               loginForm: {
//                 name: "",
//                 email: "",
//                 password: ""
//               }
//             })
//           }
//       })
//         .catch(console.log)
        
//       }
      
//       logout=(event) => {
//         event.preventDefault()
//         fetch("http://localhost:3000/logout",{
//           credentials: "include",
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json"
//           }
//         })
//         .then(r => r.json())
//         .then(resp => alert(resp.message))
//         this.setState({
//           currentUser: null,
//           pictures: []
//         })
//       }
      
//       getPictures = () => {
//         // const token = localStorage.getItem("token")
//         fetch("http://localhost:3000/home",{
//           credentials: "include",
//           headers:{
//            "Content-Type": "application/json"
//           }
//         })
//         .then(resp => resp.json())
//         .then(pictures => {
//           if(pictures.error){
//             alert("Not autorized")
//           }else {
//             this.setState({
//               pictures
//             })
//           }
//         })
//       }
      

//     render (){

//         const {currentUser} = this.props
//         return(
//             <div>hii
//               <h2>
//                  {currentUser ? `:Logged in as ${currentUser.name}` : "Not Loged In"}
//               </h2>

//               <Link to="/home">
//                <button onClick={this.getPictures} className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="#"> Pictures</button>
//               </Link>
              
//                  <Route path="/login">
//                   <LogIn
//                   handleLoginFormChange={this.handleLoginFormChange}
//                   handleLoginFormSubmit={this.handleLoginFormSubmit}
//                   name = {this.state.loginForm.name}
//                   email = {this.state.loginForm.email}
//                   password = {this.state.loginForm.password}
//                   />
//               </Route>

//               <Route path="/logout">
//                   <Logout logout={this.logout}/>
//               </Route>

//               <Link to="/home">
//                   <Home pictures = {this.state.pictures}
//                         currentUser= {this.state}/>
//               </Link>
//             </div>
//         )
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.currentUser
//     } 
//   }

// export default connect(mapStateToProps, {getCurrentUser: getCurrentUser})(LogInAndLogOut)