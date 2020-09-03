import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const NuevoProyecto = () => {



    return ( 
        <div className="form-empleado">
            <div className="form-contenedor">
                <h1 className="form-titulo">Alta Proyecto</h1>
                
            <form
                // onSubmit={submitProyecto}
            >
                <div className="form-campo">
                    <label> Nombre Proyecto</label>
                    <input 
                        type="text"
                        name= "nombre"
                        // onChange={actualizarState}
                        // value={nombre}
                    />
                </div>

                <div className="form-campo">
                    <label> Personal</label>
                    <input 
                        type="number"
                        name= "personal"
                        // onChange={actualizarState}
                        // value={nombre}
                    />
                </div>

                <div className="form-campo">
                    <label> Fecha de Finalizacion</label>
                    <input 
                        type="date"
                        name= "fechafin"
                        // onChange={actualizarState}
                        // value={nombre}
                    />
                </div>

             


                <button 
                    type="submit"
                    className="form-button"
                >Guardar</button>

            </form>

            <Link to={'/'}  className="link-form">Volver</Link>


            </div>

        </div>

     );
    
}
 
export default NuevoProyecto;