import React from 'react';
import { Container, Grid, Modal } from 'semantic-ui-react';
import PortNav from './PortNav';
import PortHome from './PortHome';
import Cosplay from './Cosplay';
import Boudoir from './Boudoir';
import Maternity from './Maternity';
import Misc from './Misc';

export default class Portfolio extends React.Component {
    constructor (props) {
        super(props)
        this.toggleCosplay = this.toggleCosplay.bind(this);
        this.toggleBoudoir = this.toggleBoudoir.bind(this);
        this.toggleMaternity = this.toggleMaternity.bind(this);
        this.toggleMisc = this.toggleMisc.bind(this);

        this.state = {
            showCosplay: false,
            showBoudior: false,
            showMaternity: false,
            showMisc: false,
            imageModal: false
        }
    }

        toggleCosplay (event) {
            event.preventDefault()
            this.setState({
                showCosplay: true,
                showBoudoir: false,
                showMaternity: false,
                showMisc: false,
                imageModal: true
            })
        }

        toggleBoudoir (event) {
            event.preventDefault()
            this.setState({
                showCosplay: false,
                showBoudoir: true,
                showMaternity: false,
                showMisc: false,
                imageModal: true
            })
        }

        toggleMaternity(event) {
            event.preventDefault()
            this.setState({
                showCosplay: false,
                showBoudoir: false,
                showMaternity: true,
                showMisc: false,
                imageModal: true
            })
        }

        toggleMisc (event) {
            event.preventDefault()
            this.setState({
                showCosplay: false,
                showBoudoir: false,
                showMaternity: false,
                showMisc: true,
                imageModal: true
            })
        }

    render() {

        const {showCosplay} = this.state;
        const {showBoudoir} = this.state;
        const {showMaternity} = this.state;
        const {showMisc} = this.state;
       
        return( 
        <Container>
            <div>   
            <PortNav 
                cosplay = {<div onClick={this.toggleCosplay}>Cosplay</div>}
                boudoir = {<div onClick={this.toggleBoudoir}>Boudoir</div>}
                maternity = {<div onClick={this.toggleMaternity}>Maternity</div>}
                misc = {<div onClick={this.toggleMisc}>Misc</div>}
            />   
            <PortHome />
                <Grid>                   
                    <Grid.Row>  
                        <Modal 
                            basic
                            closeIcon
                            onClose={() => this.setState({imageModal: false})}
                            onOpen={() => this.setState({imageModal: true})}
                            open={this.state.imageModal}
                            size='small'
                        >
                            <Modal.Content>                
                                { showCosplay === true ? <Cosplay /> : ""}
                                { showBoudoir === true ? <Boudoir /> : ""}
                                { showMaternity === true ? <Maternity /> : ""}
                                { showMisc === true ? <Misc /> : ""}
                            </Modal.Content>
                        </Modal>
                    </Grid.Row>        
                </Grid>   
        </div>
        </Container>
        )
    }
}