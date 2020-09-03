
import {
    LOGIN,
    LOGIN_EXITO,
    LOGIN_ERROR,
    LOGOUT_EXITO
}from '../types/index'


const initalState ={
        loggedIn : false,
        fetching : false,
        user: []
    }


export default function (state = initalState, action){
    switch (action.type) {
    
    case LOGOUT_EXITO:
        return { ...state, loggedIn:false, }

    case LOGIN_ERROR:
        return{...state, fetching: false, loggedIn: false}
    
    case LOGIN_EXITO:
        return{...state, fetching: false, loggedIn: true, user:action.payload}

    case LOGIN:
        return{...state, fetching: true}

   
    default:
        return state;
            
}
} 