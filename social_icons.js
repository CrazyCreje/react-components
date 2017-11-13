import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class SocialIcons extends Component {
  constructor(props) {
    super(props)
    this.hoverSocial = this.hoverSocial.bind(this);
    this.noHoverSocial = this.noHoverSocial.bind(this);

    this.state = {
      social_color: '#fff',
    }
  }

  hoverSocial() {
    this.setState({
      social_color: '#aaa'
    })
  }

  noHoverSocial() {
    this.setState({
      social_color: '#fff'
    })
  }

  render() {
    return (
      <SocialIcon
        url={this.props.url}
        className="social-icons"
        color={this.state.social_color}
        style={{ width: 40, height: 40 }}
        onMouseEnter={this.hoverSocial}
        onMouseLeave={this.noHoverSocial} />
    );
  }
}

export default SocialIcons;
