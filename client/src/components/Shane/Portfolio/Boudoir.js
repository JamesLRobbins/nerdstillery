import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
// import axios from 'axios'
import { Image } from 'semantic-ui-react';
 
class Boudoir extends React.Component {

  render() { 
   const boudoir = [
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555556/b8rnqhv2risgzrqdgyja.jpg"
     },
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555553/qtv9fqt3v0yndggbgqoh.jpg"
     },
     {
       original: "https://res.cloudinary.com/nerdstillery/image/upload/v1602555553/r3vrme24umaxozcytdtj.jpg"
     }
   ]
    return (  
            <Image centered><ImageGallery items={boudoir} sizes="100vw" /></Image>       
    )
  }
}


export default Boudoir;