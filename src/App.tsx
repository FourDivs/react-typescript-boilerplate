import Child from './Child';

const App = () => {
  return (
    <div>
      Heloooo
      <Child name="first" age={14} email="a.gmail.com" />
      <Child name="last" age={15} email="b.gmail.com" />
      <Child name="last" age={16} email="c.gmail.com" />
      <Child name="first" age={17} email="d.gmail.com" />
    </div>
  );
};

export default App;
