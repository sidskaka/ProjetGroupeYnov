import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Accueil from '../Accueil'
import Header from '../Header'
import Footer from '../Footer'
import Login from '../Login'
import Signup from '../Signup'
import Bijoux from '../Accueil/Bijoux'
import Electronics from '../Accueil/Electronique'
import WomenClothing from '../Accueil/HabilleF'
import MenClothing from '../Accueil/HabilleH'
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
        <Route path='/bijoux' component={Bijoux} />
        <Route path='/electronics' component={Electronics} />
        <Route path='/womenclothing' component={WomenClothing} />
        <Route path='/menclothing' component={MenClothing} />
        <Route path='/signup' component={Signup} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
