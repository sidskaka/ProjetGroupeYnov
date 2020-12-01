import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Accueil from '../Accueil'
import Header from '../Header'
import Footer from '../Footer'
import Login from '../Login'
import Signup from '../Signup'
import Error from '../Error'
import Favoris from '../Favoris'
import PrivateRoute from '../PrivateRoute'
import './translations.js'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Accueil} />
        <PrivateRoute path='/favoris' component={Favoris} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
