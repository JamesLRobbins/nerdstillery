import React from 'react';
// import axios from 'axios'
import { Grid, Container } from 'semantic-ui-react';

class News extends React.Component {
//   constructor(props) {
//     super(props)
  
//   this.state = {
//     newsArray: [],
//     bandName: '',
//     news: '',
//     date: ''
//   }
// }

//   componentDidMount() {
//     axios.get('http://localhost:5000/api/news')
//     .then((res) => {
//       this.setState({
//         newsArray: res.data,
//         bandName: '',
//         news: '',
//         date: ''
//       })
//     })
//   }

    render() { 
     return(
       <Container className="about">
            <Grid divided="vertically">
                <Grid.Row columns={1} textAlign="center">
                    <Grid.Column><h2>News</h2></Grid.Column>
                </Grid.Row>
            {/* <Grid.Row columns={1} className="about" >
                {this.state.newsArray.map(news => {
                    if (news.bandName === "Sega James") {
                        return <Grid.Column key={news._id}>{news.date} - {news.news}</Grid.Column>   
                        }
                    return null;
                    }
                )}
                </Grid.Row> */}
                <Grid.Row columns={1} textAlign="center">
                  <Grid.Column>
                    Sega James is currently on hiatus while James is currently working on the debut Static Siren E.P.
                  </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
  }
}


  export default News;