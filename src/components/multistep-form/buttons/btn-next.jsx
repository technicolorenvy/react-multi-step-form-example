import React, { Component } from 'react';

class BtnBack extends Component {

  constructor(props) {
    super(props);

    this.onNextClick = this.onNextClick.bind(this);
  }

  onNextClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <button
        className="btn-next empahsis-font-1"
        onClick={this.onNextClick
      }>
        Next &#62;
      </button>
    )
  }
}

export default BtnBack