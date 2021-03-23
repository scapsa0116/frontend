import React from 'react';
// import ProfileContainer from '../container/ProfileContainer.js'
import IndividualUsers from '../container/IndividualUsers.js'


const UsersList = ({users}) => {

    console.log(users)
    return (
        
        <div>
           
        {users.map(user => <IndividualUsers user = {user} key={user.id}/>)}
        </div>
        )
}

export default UsersList