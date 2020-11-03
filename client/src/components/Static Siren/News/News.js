import React from 'react';
// import axios from 'axios'
import { Grid } from 'semantic-ui-react';

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
       <div className="about">
            <Grid divided="vertically">
                <Grid.Row columns={1} textAlign="center">
                    <Grid.Column><h2>News</h2></Grid.Column>
                </Grid.Row>
            {/* <Grid.Row columns={1} className="about" >
                {this.state.newsArray.map(news => {
                    if (news.bandName === "Static Siren") {
                        return <Grid.Column key={news._id}>{news.date} - {news.news}</Grid.Column>   
                        }
                    return null;
                    }
                )}
                </Grid.Row> */}
                <Grid.Row textAlign="center">
                  <Grid.Column>
                    Debut E.P. expected early 2021
                  </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
  }
}


  export default News;
