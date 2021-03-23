import React from 'react';
import UsersList from '../container/UsersList.js'



class FetchUsersContainer extends React.Component {

    state={
        users: {},
        pictures: [],
        loading: true
    }
    
    componentDidMount(){
       
        return (
            fetch("http://localhost:3000/users/", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    
            })
            .then(res => res.json())
            .then(users =>  {
            this.setState({
                users: users,
                loading: false
            })
            })
         )
    }
    




    render(){
        return(
            <div> 
                {this.state.loading ? 'animate-spin': <UsersList users = {this.state.users}/> }
            </div>
        )
    }
}


export default FetchUsersContainer