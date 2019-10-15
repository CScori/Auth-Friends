import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <h1>Friends</h1>
          <nav>
          <ul>
            <li>
              <Link>Login</Link>
            </li>
            <li>
              <Link>Friends</Link>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route path="/login"/>
            <Route path="friends"/>
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
