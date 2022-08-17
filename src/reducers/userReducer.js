import { ADD_USER,USER_LOGIN,IS_LOGGED_IN } from "../actions/addUser"
const intialUserValue = {}

const userReducer = (state=intialUserValue,action) => {
    switch(action.type){
        case(ADD_USER):{
            return {...state,SET_USER:{}}
        }
        case(USER_LOGIN):{
            return {...state,SET_USER:{...action.payload}}
        }
        case(IS_LOGGED_IN):{
            return {...state,LOGGED_IN:action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default userReducer