import logo from './logo.svg';
import './App.css';

import Test from './Test1';
import Test2 from './Test2';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <HashRouter>

        <ul>
            <li><a href="/Test/Hello">Hello</a></li>
            <li><a href="/LoremIpsumText">LoremIpsumText</a></li>
          </ul>

          <ul>
            <li><NavLink to="/Hello">Hello</NavLink></li>
            <li><NavLink to="/LoremIpsumText">LoremIpsumText</NavLink></li>
          </ul>

          <div>
            <Route path="/Hello" component={Test}/>
            <Route path="/LoremIpsumText" component={Test2}/>
          </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
