/**import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()

    useEffect(() => {
        localStorage
        history.push('/')
    })
    return (
        <div>
            Logout
        </div>    
    )
}

export default Logout*/
import { FirebaseContext } from '../Firebase'
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

export default Logout