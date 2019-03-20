import React from "react";
import { Menu, Segment } from 'semantic-ui-react';

export class LandingPage extends React.Component {

      state = { activeItem: 'home' }
    
      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
      render() {
        const { activeItem } = this.state
    
        return (
          <Segment inverted vertical>
            <Menu inverted pointing secondary>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item
                name='introduction to readify'
                active={activeItem === 'introduction to readify'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              />

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sign-in'
                        active={activeItem === 'sign-in'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='register'
                        active={activeItem === 'register'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>

            </Menu>
          </Segment>


        );
    }
}