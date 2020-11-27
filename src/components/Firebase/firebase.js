import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyCCQsCbCGptJOBGxHDT9vm3K81BtArgiAU',
    authDomain: 'projet-groupe-ynov.firebaseapp.com',
    databaseURL: 'https://projet-groupe-ynov.firebaseio.com',
    projectId: 'projet-groupe-ynov',
    storageBucket: 'projet-groupe-ynov.appspot.com',
    messagingSenderId: '41726716035',
    appId: '1:41726716035:web:1e93fc23fc4a62210213b6'
}

class Firebase {
  constructor() {
    app.initializeApp(config)

      this.auth = app.auth()
  }

  // Inscription d'un utilisateur
  signupCustomer = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password)
  // Connexion d'un utilisateur
  loginCustomer = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password)
  // Déconnexion d'un utilisateur
  signoutCustomer = () => this.auth.signOut()
}

export default Firebase
