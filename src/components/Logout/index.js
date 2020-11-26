import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Logout = () => {
    const history = useHistory()
    const firebase = useContext(FirebaseContext)

    useEffect(() => {        
        firebase.signoutCustomer();
        localStorage.clear();
        history.push('/')
    })
    return (
        <div>
            Logout
        </div>    
    )
}

export default Logout
/**import { FirebaseContext } from '../Firebase'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

class Logout {
    
    firebase = useContext(FirebaseContext)
    history = useHistory()
    setLogout() {
        firebase.signoutCustomer();
        history.push('/')
    }
}

export default Logout*/