import React from 'react';
import ShaneTitle from '../components/Shane/ShaneTitle/ShaneTitle';
import ShaneAbout from '../components/Shane/About/About';
import ShaneEquipment from '../components/Shane/Equipment/Equipment';
import ShanePortfolio from '../components/Shane/Portfolio/Portfolio';
import ShaneContact from '../components/Shane/Contact/Contact';
import ShaneGear from '../components/Shane/Gear/Gear';
import ShaneNavBar from '../components/Shane/ShaneNavBar/ShaneNavBar';
import Divider from '../components/Shane/Portfolio/Divider';


export default class ShaneClient extends React.Component {
    constructor (props) {
        super(props)
        this.toggleAbout = this.toggleAbout.bind(this);
        this.toggleEquipment = this.toggleEquipment.bind(this);
        this.togglePortfolio = this.togglePortfolio.bind(this);
        this.toggleGear = this.toggleGear.bind(this);

        this.state = {
            showAbout: true,
            showEquipment: false,
            showPortfolio: false,
            showGear: false
        }
    }

        toggleAbout (event) {
            event.preventDefault()
            this.setState({
                showAbout: true,
                showEquipment: false,
                showPortfolio: false,
                showGear: false
            })
        }

        toggleEquipment (event) {
            event.preventDefault()
            this.setState({
                showAbout: false,
                showEquipment: true,
                showPortfolio: false,
                showGear: false
            })
        }

        togglePortfolio (event) {
            event.preventDefault()
            this.setState({
                showAbout: false,
                showEquipment: false,
                showPortfolio: true,
                showGear: false
            })
        }

        toggleGear (event) {
            event.preventDefault()
            this.setState({
                showAbout: false,
                showEquipment: false,
                showPortfolio: false,
                showGear: true
            })
        }

    render() {
        const {showAbout} = this.state;
        const {showEquipment} = this.state;
        const {showPortfolio} = this.state;
        const {showGear} = this.state;
       
        return( 
            <div>   
            <ShaneNavBar 
                about = {this.onClick=this.toggleAbout}
                equipment = {this.onClick=this.toggleEquipment}
                portfolio = {this.onClick=this.togglePortfolio}
                gear = {this.onClick=this.toggleGear}
            />
                
                    <Divider />

                    <ShaneTitle />

                    { showAbout === true ?  <ShaneAbout /> : "" }
                    { showEquipment === true ? <ShaneEquipment /> : "" }
                    { showPortfolio === true ? <ShanePortfolio /> : "" }
                    { showGear === true ? <ShaneGear /> : ""}
                    
                    <ShaneContact />
                    
                </div>
        )
    }
}