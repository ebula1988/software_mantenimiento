import React from 'react'
import { Link } from "react-router-dom";
import './styles/form.css'

const Form = (props) => {

    const {handleSubmit,handleChange}= props


  return (
    <form onSubmit={handleSubmit} >
      
    { (
      
      <section class="form-register">
        <h1>Registro de clientes </h1>
  
       
      <input
          placeholder='Nombre del cliente'
          onChange={handleChange}
          name='nombres'
          className='controls'
          required
        />

      <input
          placeholder='nit del cliente'
          onChange={handleChange}
          name='nit'
          className='controls'
          required
        />
       
        <input
          placeholder='agregar ciudad'
          onChange={handleChange}
          name='ciudad'
          className='controls'
          required 
        />

        <input
          placeholder='agregar direccion'
          onChange={handleChange}
          name='direccion'
          className='controls'
          required 
        />

        <input
          placeholder='agregar telefono'
          onChange={handleChange}
          name='telefono'
          className='controls' 
          type= 'tel'
          required
        />

         <input
          placeholder='agregar email'
          onChange={handleChange}
          name='email'
          className='controls' 
          type= 'email'
          required
        />

        <button onClick={handleSubmit} className="botons"  > 
        <Link to = {`/clientsListRouter`}>Agregar Cliente</Link>
            
        </button>

      </section>
    )}
  </form>




 
  )
}

export default Form