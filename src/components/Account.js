import axios from "axios";
import React,{useState , useEffect} from "react";
import '../style/Account.css'
import { startGetUser } from "../actions/addUser";
import { useDispatch, useSelector } from "react-redux";

const Account = (props) => {

    // const [user,setUser]  = useState({})

    // useEffect(() => {
    //     axios.get('http://dct-user-auth.herokuapp.com/users/account',{
    //         headers:{
    //             'x-auth':localStorage.getItem('token')
    //         }
    //     })
    //     .then((response) => {
    //         setUser(response.data)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // },[])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetUser())
    },[])

    const user = useSelector((state) => {
        // console.log(state.user)
        return state.user.SET_USER
    })

    return (
        <div className="container">
            <h2>User Account</h2>
            <p>id - {user?._id}</p>
            <p>Username - {user?.username}</p>
            <p>email - {user?.email}</p>
        </div>
    )
}

export default Account