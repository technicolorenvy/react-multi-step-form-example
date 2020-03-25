import React, { 
  Component,
  Suspense, 
  lazy  
} from 'react';

// commenting this out, but I tend to like to have some form of a css reset in place
// import './reset.scss';
import './style.scss';

const MultistepForm = lazy(() => import('../multistep-form/multistep-form'));


class App extends Component {
  
  render () {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Hello Multistep form</h1>
        </header>

        <Suspense fallback={<div>Loading...</div>}>
          <MultistepForm />
        </Suspense>
      </div>
    );
  }
}

export default App;
