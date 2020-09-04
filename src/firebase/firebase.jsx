import firebase from 'firebase/app'
import 'firebase/auth' 
import 'firebase/firestore'
import {useDispatch, useSelector} from 'react-redux'



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
    return empleados.add(empleado)
    .then(docRef => {
        empleados.doc(docRef.id).update({id : docRef.id })
    })
} 


export async function obtenerEmpleados(uid){
    let listado = []
   await empleados.get() 
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

            listado.push(doc.data() );
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    return listado
  
}

export async function editarEmpleadoFirebase(id, empleadoEditar){
    await empleados.doc(id).set(empleadoEditar)
}

export async function eliminarEmpleadoFirebase(id){
    await empleados.doc(id).delete()
}

