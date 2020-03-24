import React, { Component } from 'react';

import BtnNext from '../buttons/btn-next';
import BtnBack from '../buttons/btn-back';

class FormStep2 extends Component {
  
  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.formActions = this.props.formActions;
  }

  onNextClick() {
    this.formActions.onNextClick();
  }

  onBackClick() {
    this.formActions.onBackClick();
  }

  render () {

    return (
      <div className="">


        <BtnBack onClick={this.onBackClick} />
        <BtnNext onClick={this.onNextClick} />        
      </div>
    );
  }
}

export default FormStep2;
