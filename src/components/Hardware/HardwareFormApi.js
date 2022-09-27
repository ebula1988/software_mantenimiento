import React, { useState, useEffect, useRef,useContext, Fragment } from 'react';
import { Link } from "react-router-dom";
import "../../styles/hardware/HardwareForm.css"




const HardwareFormApi=(props) => {
    const {idClienteParams, nombreClienteParams} = props
   
    const [formValue, setFormValue] = useState([]);


    const AddHardware =(idCliente,nombreEquipo, modeloEquipo,marcaEquipo,ubicacionEquipo,serieEquipo)=>{
      const hardwareAdd={
          idCliente:idClienteParams,
          nombreEquipo: nombreEquipo,
          modeloEquipo: modeloEquipo,
          marcaEquipo:marcaEquipo,
          ubicacionEquipo:ubicacionEquipo,
          serieEquipo:serieEquipo
          }
          fetch ('http://localhost:4000/api/hardware',{
              method: 'POST',
              body: JSON.stringify(hardwareAdd),
              headers:{
                  "content-type" : "application/json; charset=UTF-8"
              }  
          })
          .then(resp=>resp.json())
          .then(console.log)

      alert("registro exitoso")
      console.log(hardwareAdd)
 
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

      const {  idCliente, nombreEquipo, modeloEquipo, marcaEquipo, ubicacionEquipo, serieEquipo } = formValue;

      const handleSubmit = e => {
        e.preventDefault();
        AddHardware( idCliente, nombreEquipo, modeloEquipo, marcaEquipo, ubicacionEquipo, serieEquipo)         
      };
    
  return (
   <Fragment>
    <form onSubmit={handleSubmit} >
      { (
        
        <section class="form-register">
          <h1>lista de equipos</h1>

          <input

            class="controls"
            onChange={handleChange}
            name='idCliente'
            value={idClienteParams}
            //type="hidden"
          />

<input
            class="controls"
            //onChange={handleChange}
            //name='idClientes'
            value={nombreClienteParams}
            //type="hidden"
          />


 
        <input
            class="controls"
            placeholder='Agregar Nombre de Equipo'
            onChange={handleChange}
            name='nombreEquipo'   
          />
         
          <input
            class="controls"
            placeholder='Agregar modelo de equipo'
            onChange={handleChange}
            name='modeloEquipo'
          />

          <input
            class="controls"
            placeholder='Agregar Marca de equipo'
            onChange={handleChange}
            name='marcaEquipo'
          />
        
          <input
            class="controls"
            placeholder='Agregar ubicacion del equipo'
            onChange={handleChange}
            name='ubicacionEquipo'
          />


          <input
            class="controls"
            placeholder='Agregar serie'
            onChange={handleChange}
            name='serieEquipo'
          />
         
          <button onClick={handleSubmit} className="botons">usarrrrr
           
          
           </button>
           <Link to = {`/hardwareClientRouter/${idClienteParams}`}>no usar</Link>
           

        </section>
 
      )}
    </form>
   </Fragment>
    
    
  )
}

export default HardwareFormApi