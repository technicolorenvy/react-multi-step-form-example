import React, { Component } from 'react';

import FormStep0 from './form-steps/form-step-0';
import FormStep1 from './form-steps/form-step-1';
import FormStep2 from './form-steps/form-step-2';
import FormStep3 from './form-steps/form-step-3';

import './style.scss';

// these are handy when debugging things
const IS_DEVING = false;
const DEV_STEP = 0;


class MultistepForm extends Component {
  
  constructor(props) {
    super(props);

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);

    // Get ready... set... formActions!
    this.formActions = { 
      onNextClick: this.nextStep,
      onBackClick: this.prevStep
    }

    this.state = {
      formStep: 0,
      direction: 0,
      formData: {}
    };
  }

  /**
   * React lifecycle - handles dev use-cases if IS_DEVING is set to true
   */
  componentDidMount() {
    if(IS_DEVING) {
      this.setState({formStep: DEV_STEP});
    }    
  }

  /**
   * Increments form step by 1
   */
  nextStep(data) {
    console.log(data);
    this.setState({
      formStep: this.state.formStep + 1,
      direction: 0,
      formData: Object.assign({}, this.state.formData, data)
    });
    console.log(this.state)
  }

  /**
   * Decrements form step by 1
   */
  prevStep() {
    this.setState({
      formStep: this.state.formStep - 1,
      direction: 1
    });
  }

  /**
   * Resets this.state.formStep and this.state.direction
   */
  resetForm() {
    this.setState({formStep: 0, direction: 0});
  }

  getCurrentFormStep() {
    let formComponent, 
        formData = this.state.formData;

    switch(this.state.formStep) {
      // // Start
      case 0:
        formComponent = (
          <FormStep0
            formData={formData}
            formActions={this.formActions}
          />
        );
        break;

      // 
      case 1:
        formComponent = (
          <FormStep1
            formData={formData}
            formActions={this.formActions}
            activeScenario={this.props.activeScenario}
            {...this.props}
          />
        );

        break;

      // 
      case 2:

        formComponent = (
          <FormStep2
            formData={formData}
            formActions={this.formActions}
            {...this.props}
          />
        );

        break;

      // 
      case 3:

        formComponent = (
          <FormStep3
            formData={formData}
            formActions={this.formActions}
            {...this.props}
          />
        );

        break;

      default:
        // Pound dirt
        break;
    }

    return formComponent;
  }

  render () {
    let currentFormStep = this.getCurrentFormStep(),
        formClass = `multistep-form form-state-${this.state.formStep}`;

    return (
      <div className={formClass}>
        {currentFormStep}

      </div>
    );
  }
}

export default MultistepForm;
