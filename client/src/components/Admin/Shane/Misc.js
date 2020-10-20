import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios'
import { Grid, Image, Card, Icon, Container, Button } from 'semantic-ui-react';
 
class Misc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageArray: [],
      cloudinaryLink: '',
      catagory: '',
      model: ''
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

  delete(id) {
    axios.delete(`http://localhost:5000/api/sid-images/${id}`)
    .then(() => {
      this.componentDidMount()
    })
  }
  
  render() {
    
    return (
      <Container>
      <Grid divided="vertically">
      <Grid.Row columns={6} className="about" >
          {this.state.imageArray.map(image => {
              if (image.catagory === "Misc") {
                  return <Grid.Column key={image._id}><Card>
                    <Image src={image.cloudinaryLink} alt="missing" wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>
                        <Button icon color="red" onClick={(e) => this.delete(image._id)}>
                          <Icon name="delete" />
                        </Button>
                      </Card.Header>
                    </Card.Content>
                    </Card>
                    </Grid.Column>   
                  }
              return null;
              }
          )}
          </Grid.Row>
      </Grid>
      </Container>
    )
  }
}


export default Misc;