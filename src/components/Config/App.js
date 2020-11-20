import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Accueil from '../Accueil';
import Header from '../Header';
import Footer from '../Footer';
import login from '../../screens/login';
import Signup from '../Signup';
import Error from '../Error';

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={login} />
              <Route path="/accueil" component={Accueil} />
              <Route path="/signup" component={Signup} />
              <Route component={Error} />
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
