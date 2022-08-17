import axios from 'axios'
export const ADD_USER = 'ADD_USER'
export const USER_LOGIN = 'USER_LOGIN'
export const IS_LOGGED_IN = 'IS_LOGGED_IN'

export const startUserRegister = (formData,redirect) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
            .then((response) => {
               const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                }else{
                    alert('sucessfully created a user')
                    dispatch(addUser(result))
                    redirect()
                    // history.push('/login')
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startUserLogin = (formData,redirect,handleAuth) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
            .then((response) => {
                const result = response.data
                console.log(result)
                if(result.hasOwnProperty('errors')){ // Object.keys(result).includes('errors')
                    alert(result.errors)
                }else{
                    alert('Sucessfully logged In')
                    redirect()
                    localStorage.setItem('token',result.token)
                    // handleAuth()
                    dispatch(isLoggedIn(true))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }    
}

export const startGetUser =  () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response) =>{
            const result = response.data
            dispatch(userLogin(result))
            // console.log(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    }
} 

const userLogin = (data) => {
    return{
        type:USER_LOGIN,
        payload:data
    }
}
const addUser = (data) => {
    return{
        type:ADD_USER,
        payload:data
    }
}

export const isLoggedIn = (data) => {
    return {
        type:IS_LOGGED_IN,
        payload:data
    }
}