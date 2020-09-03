import firebase from 'firebase/app'
import 'firebase/auth' 
import 'firebase/firestore'


import firebaseConfig from './config'


firebase.initializeApp(firebaseConfig);

export function loginWithGoogle() {
    let nuevoUsuario = new firebase.auth.GoogleAuthProvider()
    console.log(nuevoUsuario)

    return firebase.auth().signInWithPopup(nuevoUsuario)
    .then(snap => snap.user) 
}


export function signOutGoolge(){
    return firebase.auth().signOut() 
}


let empleados = firebase.firestore().collection('empleados');


export function crearEmpleado(empleado){
    return empleados.add({empleado})
        
} 


export async function obtenerEmpleados(uid){
    return await empleados.where('idUsuario', "==", uid).get() 
  
}
