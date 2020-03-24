import React, { Component } from 'react';

import MultistepForm from '../multistep-form/multistep-form';

// commenting this out, but I tend to like to have some form of a css reset in place
// import './reset.scss';
import './style.scss';

class App extends Component {
  
  render () {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Hello Multistep form</h1>
        </header>

        <MultistepForm />

      </div>
    );
  }
}

export default App;
