import React from 'react'


const Home = ({pictures}) => {
    const picturesJSX = pictures.map(picture => 
        <div key={picture.id}>
        {picture.image_url}
        </div> )
    console.log(picturesJSX)
    return(
        <div className="pictures">
            
        {picturesJSX}
        </div>


    )
}

export default Home