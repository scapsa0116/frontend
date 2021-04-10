import React from 'react';
import PictureList from '../container/PictureList'
import { connect } from 'react-redux'
// import { fetchPictures } from './actions/pictures'
class PicturesContainer extends React.Component {

state = {
    pictures: [],
    loading: true
}


componentDidMount(){
    
}



    render(){
        return (
            <div className="max-w-6xl mx-auto mt-20">
               {this.state.loading ? 'animate-spin': <PictureList pictures = {this.state.pictures}/> }
            </div>
        )
    }
}


mapStateToProps= (state) => {
    return{
pictures: state.pictures.list
    }
}


mapDispatchToProps=(dispatch)=>{
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps) (PicturesContainer);