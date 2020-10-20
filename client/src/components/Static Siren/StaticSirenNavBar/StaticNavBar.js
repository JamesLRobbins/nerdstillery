import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from "semantic-ui-react";

export default class StaticNavBar extends Component {

  state = {}

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name })}

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted size="massive" fluid widths={6}>
         <Menu.Item as={ Link } to="/"
          name="Home"
          icon="home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          
        />
        
        <Menu.Item
          name="Music"
          active={activeItem === 'Music'}
          onClick={this.handleItemClick && this.props.music}
          
        />
        <Menu.Item
          name='Videos'
          active={activeItem === 'Videos'}
          onClick={this.handleItemClick && this.props.videos}
        />
        <Menu.Item
          name='News'
          active={activeItem === 'News'}
          onClick={this.handleItemClick && this.props.news}
        />
        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick && this.props.about}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick && this.props.contact}
        />
      </Menu>
    )
  }
}