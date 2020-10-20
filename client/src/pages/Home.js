import React from 'react';
import MainNav from '../components/Home/MainNav/MainNav';
import Logo from '../components/Home/Logo/Logo';
import About from '../components/Home/About/About';
import Contact from '../components/Home/Contact/Contact';


export default class Home extends React.Component {

    constructor (props) {
        super(props)
        this.toggleContact = this.toggleContact.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this);

        this.state = {
            showAbout: true,
            showContact: false
        }
    }

        toggleAbout (event) {
            event.preventDefault()
            this.setState({
                showAbout: true,
                showContact: false
            })
        }

        toggleContact (event) {
            event.preventDefault()
            this.setState({
                showAbout: false,
                showContact: true
            })
        }

    render() {
        const {showAbout} = this.state;
        const {showContact} = this.state;
        return( 
        <div>   
            <MainNav 
                about = {this.onClick=this.toggleAbout}
                contact = {this.onClick=this.toggleContact}
            />
                <div className="ui container">
                    <Logo 
                        home = {<div onClick={this.toggleAbout}><img src={require("../images/nerdlogo.jpg")} alt="nerdstillery" className="ui fluid image nerdLogo"/></div>}
                    />
                </div>
                { showAbout === true ? <About /> : "" }
                { showContact === true ? <Contact /> : "" }     
        </div>
        )
    }
}