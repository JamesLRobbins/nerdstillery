import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
// import axios from 'axios'
import { Image } from 'semantic-ui-react';
 
class Misc extends React.Component {

  render() { 
   const misc = [
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555570/demkqffahjaugxmyojf6.jpg"
     },
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555569/sx5f90pw6yymty50t9xb.jpg"
     },
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555569/qeyap8pwltcdd8tnlsrm.jpg"
     }
   ]
    return (  
            <Image centered><ImageGallery items={misc} sizes="100vw" /></Image>       
    )
  }
}


export default Misc;