import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
// import axios from 'axios'
import { Image } from 'semantic-ui-react';
 
class Cosplay extends React.Component {

  render() { 
   const cosplay = [
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602172109/jdq2tyylgbh2ggbsl1hb.jpg"
     },
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602172109/v0ett7gbteywwj9qkag7.jpg"
     },
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602172108/qfoygj61ybi4snwhtfdz.jpg"
     }
   ]
    return (  
            <Image centered><ImageGallery items={cosplay} sizes="100vw" /></Image>       
    )
  }
}


export default Cosplay;
