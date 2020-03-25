import React, { Component } from 'react';

import BtnNext from '../buttons/btn-next';
import BtnBack from '../buttons/btn-back';

class FormStep0 extends Component {
  
  constructor(props) {
    let _initialState = {};

    super(props);

    this.id = 'form-step-1';
    this.name = 'hasTequila';
    this.form = null;
    this.formActions = this.props.formActions;
    this.onNextClick = this.onNextClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.onChange = this.onChange.bind(this);

    _initialState[this.name] = this.props.formData[this.name] || false;
    this.state = _initialState;
    
  }

  componentDidMount() {
    this.form = document.getElementById(this.id);
  }

  onChange() {
    let inputs = document.getElementsByName(this.name),
        incomingState = {}; 

    for (let i = 0; i < inputs.length; i++) { 
      if (inputs[i].checked) {
        incomingState[this.name] = (inputs[i].value === 'true');
        this.setState(incomingState);
        break;
      } 
    }
  }

  onNextClick() {
    // do validation here
    this.formActions.onNextClick(this.state);
  }

  onBackClick() {
    this.formActions.onBackClick();
  }

  render () {

    return (
      <div className="">
        <p>Do you have tequila?</p>
        
        <form 
          id={this.id}
          onChange={this.onChange} 
          onSubmit={this.onNextClick}
        >
          <div>
            <input type="radio" id="false" name={this.name} value="false" defaultChecked={this.state[this.name] === false}/>
            <label htmlFor="false">No, I'm not on Spring break.</label>
          </div>

          <div>
            <input type="radio" id="true" name={this.name} value="true" defaultChecked={this.state[this.name] === true}/>
            <label htmlFor="true">Yes, I do!</label>
          </div>
        </form>

        <BtnNext onClick={this.onNextClick} />
        <BtnBack onClick={this.onBackClick} />
      </div>
    );
  }
}

export default FormStep0;
