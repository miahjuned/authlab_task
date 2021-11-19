import logo from './logo.svg';
import { MainContainer } from './Components/Style/Style'
import './App.css';

function App() {
  return (
    <div>
      <MainContainer>
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
      </MainContainer>
    </div>
  );
}

export default App;
