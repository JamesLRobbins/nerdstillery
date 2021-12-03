import React from 'react';
import MainNav from '../components/Home/MainNav/MainNav';
import Logo from '../components/Home/Logo/Logo';
import About from '../components/Home/About/About';
import Contact from '../components/Home/Contact/Contact';
import { Grid } from 'semantic-ui-react'


export default class Home extends React.Component {

    render() {
        return( 
        <Grid>   
            <Grid.Row>
                <MainNav 
                    about = {this.onClick=this.toggleAbout}
                    contact = {this.onClick=this.toggleContact}
                /> 
            </Grid.Row>
                <Grid.Row centered>
                    <Logo home = {<div onClick={this.toggleAbout}><img src={require("../images/nerdlogo.jpg")} alt="nerdstillery" className="ui image nerdLogo"/></div>}/>
                </Grid.Row>
            <Grid.Row centered>
                <About />
            </Grid.Row>

            <Grid.Row centered>
                <Contact />  
            </Grid.Row>
                
        </Grid>
        )
    }
}