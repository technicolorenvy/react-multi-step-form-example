import React, { Component } from 'react';

class BtnBack extends Component {

  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <button
        className="btn-back"
        onClick={this.onBackClick}
      >
        &#60; Previous
      </button>
    )
  }
}

export default BtnBack