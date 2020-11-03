import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
// import axios from 'axios'
import { Image } from 'semantic-ui-react';
 
class Maternity extends React.Component {

  render() { 
   const maternity = [
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555571/e2penzwipnvffm1jcegb.jpg"
     },
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555554/jlmqcwdw6ftee0sumer9.jpg"
     },
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555553/dmhez36eipzfaqvubvid.jpg"
     }
   ]
    return (  
            <Image centered><ImageGallery items={maternity} sizes="100vw" /></Image>       
    )
  }
}


export default Maternity;