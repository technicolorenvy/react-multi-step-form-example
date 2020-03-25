import React, { Component } from 'react';

import BtnBack from '../buttons/btn-back';

class FormStep3 extends Component {
  
  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
    this.formActions = this.props.formActions;
  }

  onBackClick() {
    this.formActions.onBackClick();
  }

  render () {
    let formData = this.props.formData,
        isMargWorthy = (formData.hasLime === true 
                    && formData.hasTequila === true
                    && formData.hasCointreau === true);
    return (
      <div className="">
        {isMargWorthy ? (
          <h2>It's 5 o'clock somewhere, let's make that Marg!</h2>
        ): (
          <h2>Sorry, you are not currently Marg worthy, get yourself a nice glass of water and stay hydrated!</h2>
        )}
        <code>
          {JSON.stringify(this.props.formData)}
        </code>
        <BtnBack onClick={this.onBackClick} />
      </div>
    );
  }
}

export default FormStep3;
