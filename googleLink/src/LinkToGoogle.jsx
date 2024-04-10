import React from 'react';

class LinkToGoogle extends React.Component {
  handleClick = () => {
    window.location.href = 'https://www.google.com';
  };

  render() {
    return (
      <a href="https://www.google.com" onClick={this.handleClick}>
        Go to Google
      </a>
    );
  }
}

export default LinkToGoogle;
