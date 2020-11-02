import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class PortNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted widths={4} size='huge' text>
        <Menu.Item
          className="portNav"
          children={this.props.cosplay}
          name='Cosplay'
          active={activeItem === 'cosplay'}
          onClick={this.handleItemClick}
          fitted="vertically"
        />
        <Menu.Item
          className="portNav"
          children={this.props.boudoir}
          name='Boudoir'
          active={activeItem === 'boudoir'}
          onClick={this.handleItemClick}
          fitted="vertically"
        />
        <Menu.Item
          className="portNav"
          children={this.props.maternity}
          name='Maternity'
          active={activeItem === 'maternity'}
          onClick={this.handleItemClick}
          fitted="vertically"
        />
        <Menu.Item
          className="portNav"
          children={this.props.misc}
          name='Misc'
          active={activeItem === 'misc'}
          onClick={this.handleItemClick}
          fitted="vertically"
        />
      </Menu>
    )
  }
}
