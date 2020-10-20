import React from 'react';
import axios from 'axios';
import { Container, Grid, Button, Form, Dropdown } from 'semantic-ui-react'
import PortNav from '../../Shane/Portfolio/PortNav';
import Boudoir from '../Shane/Boudoir';
import Cosplay from '../Shane/Cosplay';
import Maternity from '../Shane/Maternity';
import Misc from '../Shane/Misc';

class ShaneAdmin extends React.Component {
  constructor(props) {
    super(props)
        this.toggleCosplay = this.toggleCosplay.bind(this);
        this.toggleBoudoir = this.toggleBoudoir.bind(this);
        this.toggleMaternity = this.toggleMaternity.bind(this);
        this.toggleMisc = this.toggleMisc.bind(this);

    this.state = {
      imagesArray:[],
      id: 0,
      catagory: '',
      model: '',
      cloudinaryLink: '',
      showCosplay: false,
      showBoudior: false,
      showMaternity: false,
      showMisc: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/sid-images')
    .then((res) => {
      this.setState({
        imagesArray: res.data,
        id: 0,
        catagory: '',
        model: '',
        cloudinaryLink: ''
      })
    })
  }

  catagorychange = (event, data) => {
    this.setState({
      catagory: data.value
    })
  }

  modelchange = event => {
    this.setState({
      model: event.target.value
    })
  }

  cloudinaryLinkchange = event => {
    this.setState({
      cloudinaryLink: event.target.value
    })
  }

  submit(event, id) {
    event.preventDefault()
    if (id === 0 && this.state.catagory !== '' && this.state.model !== '' && this.state.cloudinaryLink !== '') {
      axios.post('http://localhost:5000/api/sid-images', {catagory: this.state.catagory, model: this.state.model, cloudinaryLink: this.state.cloudinaryLink})
      .then(() => {
        this.componentDidMount()
        alert("Image uploaded successfully")
        console.log("Successful " + this.state.bandName + this.state.news + this.state.id)
      })
    } else if (this.state.catagory === '' || this.state.model === '' || this.state.cloudinaryLink === '') {
      alert("Please fill out all fields jackass")
    }

    else {
      axios.put(`http://localhost:5000/api/sid-images/${id}`, {catagory: this.state.catagory, model: this.state.model, cloudinaryLink: this.state.cloudinaryLink})
      .  then(() => {
        this.componentDidMount()
      })
    }
  }

  delete(id) {
    axios.delete(`http://localhost:5000/api/sid-images/${id}`)
    .then(() => {
      this.componentDidMount()
    })
  }

  edit(id) {
    axios.get(`http://localhost:5000/api/sid-images/${id}`)
    .then((res) => {
      this.setState({
        id: res.data._id,
        catagory: res.data.catagory,
        model: res.data.model,
        cloudinaryLink: res.data.cloudinaryLink
      })
    })
  }

  toggleCosplay (event) {
    event.preventDefault()
    this.setState({
        showCosplay: true,
        showBoudoir: false,
        showMaternity: false,
        showMisc: false
    })
}

toggleBoudoir (event) {
    event.preventDefault()
    this.setState({
        showCosplay: false,
        showBoudoir: true,
        showMaternity: false,
        showMisc: false
    })
}

toggleMaternity(event) {
    event.preventDefault()
    this.setState({
        showCosplay: false,
        showBoudoir: false,
        showMaternity: true,
        showMisc: false
    })
}

toggleMisc (event) {
    event.preventDefault()
    this.setState({
        showCosplay: false,
        showBoudoir: false,
        showMaternity: false,
        showMisc: true
    })
}
  render() {

    const catagories = [
      {
        key: "Cosplay",
        text: "Cosplay",
        value: "Cosplay"
      },
      {
        key: "Boudoir",
        text: "Boudoir",
        value: "Boudoir"
      },
      {
        key: "Maternity",
        text: "Maternity",
        value: "Maternity"
      },
      {
        key: "Misc",
        text: "Misc",
        value: "Misc"
      }
    ]

        const {showCosplay} = this.state;
        const {showBoudoir} = this.state;
        const {showMaternity} = this.state;
        const {showMisc} = this.state;

  return (
    <Container fluid className="admin">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Form inverted onSubmit={(e) => this.submit(e, this.state.id)}>
              <Form.Field>
                <label><h4>Catagories</h4></label>
                  <Dropdown 
                  placeholder="Select Catagory"
                  selection
                  clearable
                  options={catagories}
                  onChange={this.catagorychange}
  
                  />
              </Form.Field>
            <Form.Field>
              <label><h4>Model</h4></label>
                <input value={this.state.model} onChange={(e) => this.modelchange(e)} placeholder='Model' type="text"/>
            </Form.Field>
            <Form.Field>
              <label><h4>Cloudinary Link</h4></label>
                <input value={this.state.cloudinaryLink} onChange={(e) => this.cloudinaryLinkchange(e)} placeholder='Cloudinary Link' type="text" />
            </Form.Field>
          <Button type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column>
        <PortNav 
        cosplay = {<div onClick={this.toggleCosplay}>Cosplay</div>}
        boudoir = {<div onClick={this.toggleBoudoir}>Boudoir</div>}
        maternity = {<div onClick={this.toggleMaternity}>Maternity</div>}
        misc = {<div onClick={this.toggleMisc}>Miscellanious</div>}
        />
        </Grid.Column>
      </Grid.Row>
                        
                    <Grid.Row>                  
                    { showCosplay === true ? <Cosplay /> : ""}
                    { showBoudoir === true ? <Boudoir /> : ""}
                    { showMaternity === true ? <Maternity /> : ""}
                    { showMisc === true ? <Misc /> : ""}
                    </Grid.Row>        
                </Grid>
  </Container>

  

  );
}
}

export default ShaneAdmin;