import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Router>
        <div className="App">
          <h1>My Friends</h1>
          <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/friends" component={Friends}/>
            <Route component={Login} />
          </Switch>
          
        </div>
      </Router>
    
  );
}

export default App;
