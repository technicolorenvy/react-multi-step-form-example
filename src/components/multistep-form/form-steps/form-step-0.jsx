import React, { Component } from 'react';

import BtnNext from '../buttons/btn-next';


class FormStep0 extends Component {
  
  constructor(props) {
    let _initialState = {};

    super(props);

    this.id = 'form-step-0';
    this.name = 'isLime';
    this.form = null;
    this.formActions = this.props.formActions;
    this.onNextClick = this.onNextClick.bind(this);
    this.onChange = this.onChange.bind(this);
    console.log(this.props.formData);
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
        <p>Do you have lime?</p>
        
        <form 
          id={this.id}
          onChange={this.onChange} 
          onSubmit={this.onNextClick}
        >
          <div>
            <input type="radio" id="false" name={this.name} value="false" checked={this.state[this.name] === false}/>
            <label htmlFor="false">No, but it would be subLIME if I did.</label>
          </div>

          <div>
            <input type="radio" id="true" name={this.name} value="true" checked={this.state[this.name] === true}/>
            <label htmlFor="true">Yes, I do!</label>
          </div>
        </form>

        <BtnNext onClick={this.onNextClick} />
      </div>
    );
  }
}

export default FormStep0;
