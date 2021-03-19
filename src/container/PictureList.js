import React from 'react';
import IndividualPicture from '../container/IndividualPicture'


 const PictureList = ({pictures}) => {
     console.log(pictures)
return(
    <ul>
    {pictures.map(picture => <IndividualPicture  picture = {picture} key = {picture.id}/>)}
    </ul>
)
}

export default PictureList