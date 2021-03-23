import React from 'react'

const IndividualUsers = ({ user }) => {

    if(user.id){
    
    return (
<div>@{user.name}</div>
       
    )
}

}
export default IndividualUsers