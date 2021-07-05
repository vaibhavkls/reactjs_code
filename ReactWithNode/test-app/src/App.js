import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import LoremIpsumText from './LoremIpsum';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React Router With Node
        </a>
        <HashRouter>
        <ul>
            <li><a href="/Hello">Hello</a></li>
            <li><a href="/LoremIpsumText">LoremIpsumText</a></li>
          </ul>

          <ul>
            <li><NavLink to="/Hello">Hello</NavLink></li>
            <li><NavLink to="/LoremIpsumText">LoremIpsumText</NavLink></li>
          </ul>

          <div>
            <Route path="/Hello" component={Hello}/>
            <Route path="/LoremIpsumText" component={LoremIpsumText}/>
          </div>
          </HashRouter>
      </header>
    </div>
  );
}

export default App;
