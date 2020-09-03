
import {
    LOGIN,
    LOGIN_EXITO,
    LOGIN_ERROR,
    LOGOUT_EXITO
    
}from '../types/index'

import {loginWithGoogle, signOutGoolge} from '../firebase/firebase'

// funcion auxiliar
function guardarDatos(datosUsuario){
    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario))
}




export const loginGoogleAction = () =>(dispatch, getState) =>{
    dispatch(loginGoogle())

    return loginWithGoogle()
        .then(user =>{
            dispatch(loginGoogleExito(user))

            guardarDatos(getState().usuario)

        })

       .catch (error => {
           console.log(error)
            dispatch(loginGoogleError(error))
        }) 
}

const loginGoogle = () =>({
    type: LOGIN
})

const loginGoogleExito = (user) =>({

    type:LOGIN_EXITO,
    payload: {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,     
    }
})

const loginGoogleError = (error)=>({
    type: LOGIN_ERROR,
})


export function logoutGoogleAction(){
    return async (dispatch) =>{
        try {
            await signOutGoolge
            dispatch(logoutExito())
            localStorage.removeItem('datosUsuario')

        } catch (error) {
            console.log(error)
            
        }
    }
}

const logoutExito = () => ({
    type:LOGOUT_EXITO,
    
})


export const restoreSesionAction = () => (dispatch) =>{
    let storage = localStorage.getItem('datosUsuario')
    storage = JSON.parse(storage)

    if(storage && storage.user){
        dispatch({
            type: LOGIN_EXITO,
            payload: storage.user
        })
    }
}


