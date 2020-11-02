import React from 'react';
import { Container } from 'semantic-ui-react'
import ShaneLogo from '../components/Shane/ShaneLogo/ShaneLogo';
import ShaneAbout from '../components/Shane/About/About';
import ShaneEquipment from '../components/Shane/Equipment/Equipment';
import ShanePortfolio from '../components/Shane/Portfolio/Portfolio';
import ShaneContact from '../components/Shane/Contact/Contact';
import ShaneNavBar from '../components/Shane/ShaneNavBar/ShaneNavBar';
import Divider from '../components/Shane/Portfolio/Divider';


export default class ShaneClient extends React.Component {
    constructor (props) {
        super(props)
        this.toggleAbout = this.toggleAbout.bind(this);
        this.toggleEquipment = this.toggleEquipment.bind(this);
        this.togglePortfolio = this.togglePortfolio.bind(this);
        this.toggleContact = this.toggleContact.bind(this);

        this.state = {
            showAbout: true,
            showEquipment: false,
            showPortfolio: false,
            showContact: false
        }
    }

        toggleAbout (event) {
            event.preventDefault()
            this.setState({
                showAbout: true,
                showEquipment: false,
                showPortfolio: false,
                showContact: false
            })
        }

        toggleEquipment (event) {
            event.preventDefault()
            this.setState({
                showAbout: false,
                showEquipment: true,
                showPortfolio: false,
                showContact: false
            })
        }

        togglePortfolio (event) {
            event.preventDefault()
            this.setState({
                showAbout: false,
                showEquipment: false,
                showPortfolio: true,
                showContact: false
            })
        }

        toggleContact (event) {
            event.preventDefault()
            this.setState({
                showAbout: false,
                showEquipment: false,
                showPortfolio: false,
                showContact: true
            })
        }

    render() {
        const {showAbout} = this.state;
        const {showEquipment} = this.state;
        const {showPortfolio} = this.state;
        const {showContact} = this.state;
       
        return( 
        <Container>
            <div>   
            <ShaneNavBar 
                about = {this.onClick=this.toggleAbout}
                equipment = {this.onClick=this.toggleEquipment}
                portfolio = {this.onClick=this.togglePortfolio}
                contact = {this.onClick=this.toggleContact}
            />
                <div className="ui container">
                    <Divider />

                    { showAbout === true ?  <ShaneLogo /> : "" }
                    { showEquipment === true ? <ShaneLogo /> : "" }
                    { showContact === true ? <ShaneLogo /> : "" }

                    { showAbout === true ?  <ShaneAbout /> : "" }
                    { showEquipment === true ? <ShaneEquipment /> : "" }
                    { showPortfolio === true ? <ShanePortfolio /> : "" }
                    
                    <ShaneContact />
                    
                </div>
        </div>
        </Container>
        )
    }
}