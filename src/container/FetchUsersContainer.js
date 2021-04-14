import React from 'react';
import UsersList from '../container/UsersList.js'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/userPictures'



class FetchUsersContainer extends React.Component {

    // state={
    //     users: {},
    //     pictures: [],
    //     loading: true
    // }
    
    componentDidMount(){
       
        // return (
        //     fetch("http://localhost:3000/users/", {
        //     method: 'GET',
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     }
    
        //     })
        //     .then(res => res.json())
        //     .then(users =>  {
        //     this.setState({
        //         users: users,
        //         loading: false
        //     })
        //     })
        //  )

        this.props.dispatchFetchUsers()
    }
    




    render(){
        if (this.props.loadingState === "notStarted"){
            return null
        }
        return(
            <div> 
                {this.props.loadingState === "inProgress" ? ('animate-spin'): <UsersList users = {this.props.users}/> }
            </div>
        )
    }
}


const mapStateToProps= (state) => {
    return{
        loadingState: state.users.loadingState,
        usersPictures: state.users.list,
        
       
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
    dispatchFetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchUsersContainer)