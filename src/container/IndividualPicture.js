import React from 'react';
// import PostContainer from '../container/PostContainer.js'
import { Link } from 'react-router-dom'

const IndividualPicture = ({picture, user}) => {

  
    return (
          
    <li key={picture.id}>
    <div className=" rounded overflow-hidden border w-full lg:w-6/12   md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
    <div className="w-full flex justify-between p-3">
    <div className="flex">
    <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
    <img src={picture.image_url} alt="profilepic"/>

    </div>
    <Link to={`/users/${picture.user_id}`}>
    <span className="pt-1 ml-2 font-bold text-sm">{picture.user_name}</span>
    </Link>

    </div>
    <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
     </div> 
     <Link to={`/pictures/${picture.id}`}>
     <img className="w-full bg-cover" src={picture.image_url} alt="" />
     </Link>
     
     <div className="px-3 pb-2">
     <div className="pt-2">
     <i className="far fa-heart cursor-pointer"></i>
     <span className="text-sm text-gray-400 font-medium">12 likes</span>

     </div>
     <div className="pt-1">
     <span className="font-medium mr-2">{picture.user_name}</span>{picture.description}
     </div>
     </div>
     <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>
     <div className="mb-2">
     <div className="mb-2 text-sm">
     <span className="font-medium mr-2">razzle_dazzle</span> Dude! How cool! I went to New Zealand last summer and had a blast taking the tour! So much to see! Make sure you bring a good camera when you go!
     </div>
     </div>
 </div>
 </li>
 
    )
}

export default IndividualPicture