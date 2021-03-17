import React from 'react';
import IndividualPicture from '../container/IndividualPicture'


 const PictureList = ({pictures}) => {
     console.log(pictures)
return(
    <ul>
    {pictures.map(picture => <li><IndividualPicture key = {picture.id} picture = {picture}/></li>)}
    </ul>
)
}

export default PictureList