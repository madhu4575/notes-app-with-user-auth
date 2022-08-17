import React from 'react'
import { Link,Route ,withRouter} from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import NoteContainer from '../user-auth-ui/NoteContainer'
import PrivateRoute from './PrivateRoute'
import '../style/NavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedIn } from '../actions/addUser'

const NavBar = (props) => {
    // const {userLoggedIn,handleAuth} = props
    const loginStatus = useSelector((state) => {
        return state.user.LOGGED_IN
    })

    console.log(loginStatus)
    const dispatch = useDispatch()
    return(
        <div>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    {
                        loginStatus ? (
                            <div id='main-link'>
                                <li><Link to='/account' >Account</Link></li>
                                <li><Link to='/mynotes'>My Notes</Link></li>
                                <li><Link to='/' onClick={() => {
                                    localStorage.removeItem('token')
                                    alert('Sucessfull logged out')
                                    // handleAuth()
                                    dispatch(isLoggedIn(false))
                                    // props.history.push('/')
                                }}>Logout</Link></li>
                            </div>
                        ):
                        (
                            <>
                                <li><Link to='/register'>Register</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </>
                        )
                    }
                </ul>
            </div>

            <Route path='/' component={Home} exact/>
            <Route path='/register' component={Register} />
            <Route path='/login' render={(props) => { return <Login {...props} /*handleAuth={handleAuth}*/ />}}/>
            <PrivateRoute path='/account' component={Account} />
            <PrivateRoute path='/mynotes' component={NoteContainer}/>
        </div>
    )
}

export default withRouter(NavBar)