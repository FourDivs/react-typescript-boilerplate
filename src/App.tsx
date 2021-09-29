import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleBtnClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>{counter}</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={handleBtnClick}>Increment</button>
      </header>
    </div>
  );
};

export default App;
