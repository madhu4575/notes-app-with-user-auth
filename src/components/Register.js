import React, { useState } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { startUserRegister} from '../actions/addUser'
import '../style/Register.css'

const Register = (props) => {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = () => {
        props.history.push('/login')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username:username,
            email:email,
            password:password
        }

        // TODO validation

        // axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
        //     .then((res) => { 
        //         const result = res.data
        //         if(result.hasOwnProperty('errors')) { 
        //             alert(result.message)
        //         }else{
        //             alert("sucessfully created a user")
        //             props.history.push('/login')
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err.message)
        //     })
        // console.log(formData)
        
        dispatch(startUserRegister(formData,redirect))
    }

    const handleChange = (e) => { 
        if(e.target.name === 'username'){
            setUsername(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    return(
        <div id='main'>
            <h2>Register with us</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder="enter username"
                    value={username}
                    onChange={handleChange}
                    name='username'
                /><br />
                <input 
                    type='text'
                    placeholder="enter email"
                    onChange={handleChange}
                    value={email}
                    name='email'
                /><br />
                <input 
                    type='password'
                    placeholder="enter your password"
                    value={password}
                    onChange={handleChange}
                    name='password'
                /><br />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Register