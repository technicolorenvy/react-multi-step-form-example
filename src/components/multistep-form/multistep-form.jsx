import React, { Component } from 'react';
import { parallel } from 'async-es';

import './style.scss';

// form related constants
const FORM_STEP_COUNT = 4;
const FORM_STEP_PRE = 'form-step-';

// these are handy when debugging things, see componentDidMount below
const IS_DEVING = false;
const DEV_STEP = 0;


class MultistepForm extends Component {
  
  constructor(props) {
    super(props);

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.formStepCollection = [];

    this.formActions = { 
      onNextClick: this.nextStep,
      onBackClick: this.prevStep
    }

    this.state = {
      formStep: 0,
      direction: 0,
      formData: {},
      subStepsLoaded: false
    };
  }

  /**
   * React lifecycle - handles dev use-cases if IS_DEVING is set to true
   */
  componentDidMount() {
    if(IS_DEVING) {
      this.setState({formStep: DEV_STEP});
    }    

    this.importFormSteps();
  }

  /**
   * React lifecycle - logging current value of this.state.formDate
   */
  componentDidUpdate(prevProps, prevState) {
    if (this.state.formData !== prevState.formData) {
      console.log(this.state.formData);
    }
  }

  /**
   * Import all steps from the form-steps dir as determined by value of FORM_STEP_COUNT
   */
  importFormSteps() {
    let formStepFetchCollection = {},
        _formStepCollection = {};
    
    // Create the layer data import fns
    for (let i = 0; i < FORM_STEP_COUNT; i++) {
      let stepKey = FORM_STEP_PRE+i;
      formStepFetchCollection[stepKey] = (callback) => {
        import(`./form-steps/${stepKey}`).then( res => callback(null, res) ); 
      }  
    }

    return new Promise((resolve) => {
      // Fetch all the things
      parallel(formStepFetchCollection, (innerErr, innerRes) => {
        Object.keys(innerRes).forEach(v => {
          _formStepCollection[v] = innerRes[v].default;
        })
        this.formStepCollection = _formStepCollection;   
        this.setState({subStepsLoaded: true});
        resolve();
      })
    });
  }

  /**
   * Increments form step by 1
   */
  nextStep(data) {
    this.setState({
      formStep: this.state.formStep + 1,
      direction: 1,
      formData: Object.assign({}, this.state.formData, data)
    });
  }

  /**
   * Decrements form step by 1
   */
  prevStep() {
    this.setState({
      formStep: this.state.formStep - 1,
      direction: 0
    });
  }

  /**
   * Resets this.state
   */
  resetForm() {
    this.setState({formStep: 0, direction: 0, formData: {}});
  }

  /**
   * Returns the current form step component based on the current value of
   * this.state.formStep
   */
  getCurrentFormStep() {
    let FormComponent, 
        formData;

    if (this.state.subStepsLoaded === false) { return; }

    FormComponent = this.formStepCollection[FORM_STEP_PRE+this.state.formStep];
    formData = this.state.formData;    

    return (
      <FormComponent
        formData={formData}
        formActions={this.formActions}
        activeScenario={this.props.activeScenario}
        {...this.props}      
      />
    );
  }

  /**
   * React lifecycle method
   */
  render () {
    let currentFormStep = this.getCurrentFormStep(),
        formClass = `multistep-form form-state-${this.state.formStep}`;

    return (
      <div className={formClass}>
        <div className="form-inner">
          {currentFormStep}
        </div>
      </div>
    );
  }
}

export default MultistepForm;
