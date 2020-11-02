import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class ShaneNavBar extends Component {
  render() {

    return(
  
  <Grid columns={5} centered>
    <Grid.Row textAlign="center">
      <Grid.Column width={3} verticalAlign="bottom" as={ Link } to="/" style={{ textDecoration: 'none'}}>
        <div className="shaneNavBar">Home</div>
      </Grid.Column>
      <Grid.Column width={3} verticalAlign="bottom" onClick={this.props.about}>
      <div className="shaneNavBar">About</div>
      </Grid.Column>
      <Grid.Column width={3} verticalAlign="top">
      <Image src={require("../../../images/shaneIconInterted.png")} alt="static-siren" size="tiny" centered/>
      </Grid.Column>
    <Grid.Column width={3} verticalAlign="bottom" onClick={this.props.portfolio}>
        <div className="shaneNavBar">Portfolio</div>
      </Grid.Column>
      <Grid.Column width={3} verticalAlign="bottom" onClick={this.props.contact}>
      <div className="shaneNavBar">Gear</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    )
  }

}

