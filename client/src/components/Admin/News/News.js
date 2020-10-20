import React from 'react';
import axios from 'axios';
import { Container, Grid, Button, Form, Table, Icon, Dropdown } from 'semantic-ui-react';

class NewsAdmin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newsArray:[],
      id: 0,
      bandName: '',
      news: '',
      date: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/news')
    .then((res) => {
      this.setState({
        newsArray: res.data,
        id: 0,
        bandName: '',
        news: '',
        date: ''
      })
    })
  }

  bandnamechange = (event, data) => {
    this.setState({
      bandName: data.value
    })
  }

  newschange = event => {
    this.setState({
      news: event.target.value
    })
  }

  datechange = event => {
    this.setState({
      date: event.target.value
    })
  }

  submit(event, id) {
    event.preventDefault()
    if (id === 0 && this.state.bandName !== '' && this.state.news !== '' && this.state.date !== '') {
      axios.post('http://localhost:5000/api/news', {bandName: this.state.bandName, news: this.state.news, date: this.state.date})
      .then(() => {
        this.componentDidMount()
        alert("Upload Successfully")
        console.log("Successful " + this.state.bandName + this.state.news + this.state.id)
      })
    } else if (this.state.bandName === '' || this.state.news === '' || this.state.date === '') {
        alert("Please fill out all fields")
    }else {
      axios.put(`http://localhost:5000/api/news/${id}`, {bandName: this.state.bandName, news: this.state.news, date: this.state.date})
      .  then(() => {
        this.componentDidMount()
      })
    }
  }

  delete(id) {
    axios.delete(`http://localhost:5000/api/news/${id}`)
    .then(() => {
      this.componentDidMount()
    })
  }

  edit(id) {
    axios.get(`http://localhost:5000/api/news/${id}`)
    .then((res) => {
      this.setState({
        id: res.data._id,
        bandName: res.data.bandName,
        news: res.data.news,
        date: res.data.date
      })
    })
  }
  render() {

    const bandNames = [
      {
        key: "Cryptic Calling",
        text: "Cryptic Calling",
        value: "Cryptic Calling"
      },
      {
        key: "Static Siren",
        text: "Static Siren",
        value: "Static Siren"
      },
      {
        key: "Sega James",
        text: "Sega James",
        value: "Static Siren"
      },
      {
        key: "Just James",
        text: "Just James",
        value: "Just James"
      }
    ]

  return (
    <Container fluid className="admin">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Form inverted onSubmit={(e) => this.submit(e, this.state.id)}>
              <Form.Field>
                <label><h4>Band Name</h4></label>
                  <Dropdown 
                  placeholder="Select Band"
                  fluid
                  selection
                  options={bandNames}
                  onChange={this.bandnamechange}
                  />
              </Form.Field>
            <Form.Field>
              <label><h4>News</h4></label>
                <input value={this.state.news} onChange={(e) => this.newschange(e)} placeholder='News' type="text"/>
            </Form.Field>
            <Form.Field>
              <label><h4>Date</h4></label>
                <input value={this.state.date} onChange={(e) => this.datechange(e)} placeholder='Date' type="date" />
            </Form.Field>
          <Button type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
        <Grid.Column>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Band Name</Table.HeaderCell>
              <Table.HeaderCell>News</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Edit News</Table.HeaderCell>
              <Table.HeaderCell>Delete News</Table.HeaderCell>
             </Table.Row>
          </Table.Header>

         <Table.Body>
          {this.state.newsArray.map(newsArticle => 
          <Table.Row key={newsArticle._id}>
          <Table.Cell>{newsArticle.bandName}</Table.Cell>
          <Table.Cell> {newsArticle.news} </Table.Cell>
          <Table.Cell> {newsArticle.date}</Table.Cell>
          <Table.Cell>
          <Button icon color="blue" onClick={(e) => this.edit(newsArticle._id)} className="btn waves-effect waves-light" type="submit" name="action">
            <Icon fitted name="edit" />
          </Button>
          </Table.Cell>
          <Table.Cell>
          <Button icon color="red" onClick={(e) => this.delete(newsArticle._id)} className="btn waves-effect waves-light" type="submit" name="action">
            <Icon fitted name="delete" />
          </Button>
          </Table.Cell>
        </Table.Row>
            
            
            )}
          
        </Table.Body>
      </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>

  );
}
}

export default NewsAdmin;

