import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { startUserLogin } from "../actions/addUser";

const Login = (props) => {
    const {handleAuth} = props
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()

    const redirect = () => {
        props.history.push('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email:email,
            password:password
        }
        
        //TODO validation
        // axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
        //     .then((response) => {
        //         const result = response.data
        //         if(result.hasOwnProperty('errors')){ // Object.keys(result).includes('errors')
        //             alert(result.errors)
        //         }else{
        //             alert('sucessfully logged in')
        //             localStorage.setItem('token',result.token)
        //             props.history.push('/')
        //             handleAuth()
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err.message)
        //     })

        // console.log(formData)
        dispatch(startUserLogin(formData,redirect,handleAuth))
    }

    const handleChange = (e) => {
        const value = e.target.value
        if(e.target.name === 'email'){
            setEmail(value)
        }else if(e.target.name === 'password'){
            setPassword(value)
        }
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder="enter email"
                    value={email} 
                    onChange={handleChange}
                    name='email'
                /> <br />
                <input 
                    type='password'
                    placeholder="enter password"
                    value={password}
                    onChange={handleChange}
                    name='password'
                /><br />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Login