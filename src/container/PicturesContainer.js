import React from 'react';
import PictureList from '../container/PictureList'

class PicturesContainer extends React.Component {

state = {
    pictures: [],
    loading: true
}


componentDidMount(){
    return (
        fetch("http://localhost:3000/", {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }

        })
        .then(res => res.json())
        .then(pictures =>  {
        this.setState({
            pictures: pictures,
            loading: false
        })
        })
        )
}



    render(){
        return (
            <div className="max-w-6xl mx-auto mt-20">
               {this.state.loading ? 'animate-spin': <PictureList pictures = {this.state.pictures}/> }
            </div>
        )
    }
}

export default PicturesContainer;