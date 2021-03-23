import React from 'react'
import { Link } from 'react-router-dom'
import ProfileContainer from '../container/ProfileContainer.js'


const IndividualUsers = ({ user }) => {

    console.log(user)
    
    return (
  
    <div key={user.id}>
        <Link to={`users/${user.id}`}>
        <ProfileContainer userId = {user.id} user = {user}/>
        </Link>
       
    </div>
   
       
    )}


export default IndividualUsers