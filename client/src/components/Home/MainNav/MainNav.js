import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon } from "semantic-ui-react";

export default class MainNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted size="massive" fluid widths={4}>
        <Dropdown icon="gamepad" item text="Gaming" className="mainNav mainNavMedia">
            <Dropdown.Menu>
              <Dropdown.Item href="https://www.youtube.com/nerdstillery" target="_blank" rel="noopener noreferrer"><Icon name="youtube play" />Youtube</Dropdown.Item>
              <Dropdown.Item href="https://www.twitch.com/nerdstillery" target="_blank" rel="noopener noreferrer"><Icon name="twitch" />Twitch (Main)</Dropdown.Item>
              <Dropdown.Item href="https://www.twitch.tv/sidundead86" target="_blank" rel="noopener noreferrer"><Icon name="twitch" />Twitch (Shane)</Dropdown.Item>
              <Dropdown.Item href="https://www.speedrun.com/user/Nerdstillery" target="_blank" rel="noopener noreferrer"><Icon name="game" />Speedrun</Dropdown.Item>
              <Dropdown.Item href="https://vgcollect.com/jamesandhisgames" target="_blank" rel="noopener noreferrer"><Icon name="gift" />Collection</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Music' icon="music" floating className="mainNav mainNavMedia">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/crypticcalling">Cryptic Calling</Dropdown.Item>
              <Dropdown.Item as={Link} to="/staticsiren">Static Siren</Dropdown.Item>
              <Dropdown.Item as={Link} to="/segajames">Sega James</Dropdown.Item>
              {/* <Dropdown.Item as={Link} to="/james">Just James</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        <Menu.Item id="photography"
          name='Photography'
          active={activeItem === 'Photography'}
          onClick={this.handleItemClick}
          icon="photo"
          as={Link} to="/sidneyvinsonphotography"
          className="mainNav"
        />
        <Menu.Item id="discord"
          name='Discord'
          // active={activeItem === 'Photography'}
          // onClick={this.handleItemClick}
          icon="discord"
          href="https://discord.com/channels/773367811824287786/773367814069288970" target="_blank" rel="noopener noreferrer"
          className="mainNav mainNavMedia"
        />
        {/* <Menu.Item
          name="Anime"
          icon="jpy"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick && this.props.about} 
          className="mainNav mainNavMedia"
          disabled
        /> */}
      </Menu>
    )
  }
}
