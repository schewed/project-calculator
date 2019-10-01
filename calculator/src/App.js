import React from 'react';
import './App.css';
import Calculator from './Calculator.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      display: 'testing display capability',
      result: 0
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Calculator display={this.state.display}/>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
