import React, { useState, useEffect, useRef,useContext } from 'react';
import { Link } from "react-router-dom";
import "../../styles/hardware/HardwareForm.css"


const TaskFormFormApi=(props)=> {

    const {idEquipoParams,nombreEquipoParams}=props
    const [formValue, setFormValue] = useState([]);


    const AddTask = (idEquipo, tarea )=>{
      const taskAdd={
          idEquipo: idEquipoParams,
          tarea: tarea
        }
          fetch ('http://localhost:4000/api/task',{
              method: 'POST',
              body: JSON.stringify(taskAdd),
              headers:{
                  "content-type" : "application/json; charset=UTF-8"

              }
           })
          .then(resp=>resp.json())
          .then(console.log)

      alert("registro exitoso")

    }

    const handleChange = (event) => {
    const { name, value } = event.target;
      
        setFormValue((prevState) => {
            return {
            ...prevState,
            [name]: value,
          };
        });
      };

      const { idEquipo,tarea } = formValue;
      const handleSubmit = e => {
        e.preventDefault();
        AddTask( idEquipo, tarea)       
      };
    


  return (
    <div>
       <form onSubmit={handleSubmit} >
      { (
        <>
        <section class="form-register">
          <h1>agregar instructivos de mantenimiento</h1>

          <input
            class="controls"
            placeholder='Agregar Nombre de Equipo'
            onChange={handleChange}
            name='idEquipo'
            value={idEquipoParams}
            type="hidden"
          />

         

          <label
           class="controls"
          >{nombreEquipoParams}

          </label>
          <input
            class="controls"
            placeholder='nombre del Instructivo'
            onChange={handleChange}
            name='tarea'
          />
         
          <button onClick={handleSubmit} className="botons"> anexar Instructivo</button>

        </section>
         
        </>
      )}
      </form>
    </div>
    
  )
}

export default TaskFormFormApi