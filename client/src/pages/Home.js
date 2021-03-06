import React from 'react';
import MainNav from '../components/Home/MainNav/MainNav';
import Logo from '../components/Home/Logo/Logo';
import About from '../components/Home/About/About';
import Contact from '../components/Home/Contact/Contact';


export default class Home extends React.Component {

    render() {
        return( 
        <div>   
            <MainNav 
                about = {this.onClick=this.toggleAbout}
                contact = {this.onClick=this.toggleContact}
            />
                <div className="ui container">
                    <Logo 
                        home = {<div onClick={this.toggleAbout}><img src={require("../images/nerdlogo.jpg")} alt="nerdstillery" className="ui image nerdLogo"/></div>}
                    />
                </div>
                <About />
                <Contact />  
        </div>
        )
    }
}