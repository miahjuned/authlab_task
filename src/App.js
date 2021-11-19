import logo from './logo.svg';
import './App.css';
import '../output/tailwind.css'

function App() {
  return (
    <div className="Ap">
      <header className="App-heder bg-red-800">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn juned
        </a>
      </header>
    </div>
  );
}

export default App;
