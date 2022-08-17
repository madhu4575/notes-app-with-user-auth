import React, {useEffect} from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { isLoggedIn, startGetUser } from './actions/addUser'
import { useDispatch } from 'react-redux'



const App = (props) => {
  // const [userLoggedIn,setUserLoggedIn] = useState(false)

  // const handleAuth = () => {
  //   setUserLoggedIn(!userLoggedIn)
  // }

  // useEffect(() => {
  //   if(localStorage.getItem('token')){
  //   handleAuth()
  //   }
  // },[])

  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log('dispatch')
      dispatch(startGetUser())
      // handleAuth()
      dispatch(isLoggedIn(true))
    }
  },[])

  return(
    <div className='user'>
      <h1 >User Auth</h1>
      <div className='nav'><NavBar /*userLoggedIn={userLoggedIn} handleAuth={handleAuth}*/ /></div>
    </div>
  )
}

export default App