
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
        return { ...state, loggedIn:false, user: []  }

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


// "This domain (relaxed-haibt-677820.netlify.app) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab."