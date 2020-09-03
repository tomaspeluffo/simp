import React, { useState } from 'react'
import './editarempleado.css';
import { Link } from 'react-router-dom'



const EditarEmpleado = () => {


    return ( 
        <div className="form-empleado">
            <div className="form-contenedor">
                <h1 className="form-titulo">Editar Empleado</h1>
                
            <form
                // onSubmit={submitEmpleado}
                className='form'
            >
                <div className="form-campo">
                    <label> Nombre y Apeliido</label>
                    <input 
                        type="text"
                        name= "nombre"
                        disabled= {true}
                        // onChange={actualizarState}
                        // value={nombre}
                    />
                </div>

                <div className="form-campo">
                    <label>DNI</label>
                    <input 
                        type="number"
                        name= "dni"
                        disabled= {true}

                        // onChange={actualizarState}
                        // value={dni}
                    />
                </div>

                <div className="form-campo">
                    <label> Domicilio</label>
                    <input 
                        type="text"
                        name= "domicilio"
                        // onChange={actualizarState}
                        // value={domicilio}
                    />
                </div>

                <div className="form-campo">
                <label> Proyecto</label>
                    <select
                        name= "proyecto"
                        // value= {proyecto}
                        // onChange={actualizarState}
                    >
                        <option value="">Elegir Proyecto</option> 
                        {/* {proyectos.map( lista =>(
                        <option value={lista.nombre}>{lista.nombre}</option> 

                        ))} */}
                         
                    </select>   
                </div>

                <div className="form-campo">
                    <label>Fecha de Contrato</label>
                    <input 
                        type="date"  
                        name= "fecha"
                        // onChange={actualizarState}
                        // value={fecha}
                    />
                </div>

                <button 
                    type="submit"
                    className="form-button"
                >Editar</button>

            </form>

            <Link to={'/'}  className="link-form">Volver</Link>



            </div>

        </div>

     );
}
 
export default EditarEmpleado;