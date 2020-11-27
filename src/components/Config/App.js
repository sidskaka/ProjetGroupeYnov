import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Accueil from '../Accueil';
import Header from '../Header';
import Footer from '../Footer';
import login from '../../screens/login';
import Signup from '../Signup';
import Logout from '../Logout';
import Error from '../Error';
import Favoris from '../Favoris'

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={Accueil} />
              <Route exact path="/favoris" component={Favoris} />
              <Route path="/login" component={login} />
              <Route path="/signup" component={Signup} />
              <Route path="/logout" component={Logout} />
              <Route component={Error} />
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
