import { useState } from 'react';
import './App.css';
import Child from './Child';

const App = () => {
  return (
    <div>
      Heloooo
      <Child name="first" age={14} />
      <Child name="last" age={15} />
      <Child name="last" age={16} />
      <Child name="first" age={17} />
    </div>
  );
};

export default App;
