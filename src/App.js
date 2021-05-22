import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// import config from 'auth'
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import firebase from "firebase/app";
import "firebase/auth";

import HomePage from 'pages/Home';
import BrowsePage from 'pages/Browse';

const App = () => (
  // <FirebaseAuthConsumer firebase={firebase} {...config}>
  <FirebaseAuthConsumer firebase={firebase}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/browse" component={BrowsePage} />
      </Switch>
    </Router>
  </FirebaseAuthConsumer>
);

export default App;
