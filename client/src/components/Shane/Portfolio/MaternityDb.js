import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios'
import { Image } from 'semantic-ui-react';
 
class Maternity extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageArray: [],
      cloudinaryLink: '',
      catagory: '',
      model: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/sid-images')
    .then((res) => {
      this.setState({
        imageArray: res.data,
        cloudinaryLink: '',
        catagory: '',
        model: '',
      })
    }) 
  } 

  render() { 
    const images = this.state.imageArray.filter(function (image) {
      return image.catagory === "Maternity";
    }).map(function (image) {
      return {original: image.cloudinaryLink,
              thumbnail: image.cloudinaryLink}
}) 
    return (  
            <Image centered><ImageGallery items={images} sizes="100vw" /></Image>       
    )
  }
}


export default Maternity;