import React from 'react';
import './App.css';
import Calculator from './Calculator.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      display: '',
      result: 0
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Calculator />
        </div>
      </header>
    </div>
  );
  }
}

export default App;
