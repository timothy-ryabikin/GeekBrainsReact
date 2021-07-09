
import './App.css';
import Message from './Message';

function App(props) {
  return (
    <div className="App">

      <header className="App-header">
        <span className="red">My First React App</span>
        <h3>Hello, {props.name}</h3>
        <Message text="Edison" />
      </header>
    </div>
  );
}

export default App;
