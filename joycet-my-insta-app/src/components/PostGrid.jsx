import React from 'react';
import PostItem from './PostItem';

const image1 = require("../assets/image1.JPG");
const image2 = require("../assets/IMG_0352.JPG");
const image3 = require("../assets/IMG_0536.JPG");
const image4 = require("../assets/IMG_1663.JPG");
const image5 = require("../assets/IMG-6458.JPG");
const image6 = require("../assets/REUS6592.JPG");

class PostGrid extends React.Component{
    myImages(){
        const images = [image1,image2, image3,image4,image5,image6];

        return images.map(item => {
            return <PostItem image={item}/>

        })
  
    }

    render(){
        return(
            <div className='PostGrid'>
                {this.myImages()}

            </div>
        )
    }
    
}
export default PostGrid;