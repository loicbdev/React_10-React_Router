import React from 'react';
import ReactDOM from 'react-dom';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/my-profile">My profile</Link>
            <Link to="/user-profile/Baptiste">Baptiste</Link>
            <Link to="/user-profile/Francois2344">François</Link>
            <Link to="/user-profile/JimmyGre">Jimmy</Link>
            <Link to="/user-profile/thomas37000">Thomas</Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
          <Route
            path="/user-profile/:githubLogin"
            component={UserProfile}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
