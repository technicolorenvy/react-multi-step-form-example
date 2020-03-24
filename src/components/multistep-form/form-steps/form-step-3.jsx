import React, { Component } from 'react';

import BtnBack from '../buttons/btn-back';

class FormStep3 extends Component {
  
  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
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
      </div>
    );
  }
}

export default FormStep3;
