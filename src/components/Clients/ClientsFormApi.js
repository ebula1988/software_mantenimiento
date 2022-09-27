import React, { Fragment, useState, } from 'react';
//import '../../styles/clients/ClientsForm.css';

import Form from '../Clients/Form'



const  ClientsFormApi = ()=> {

    const [formValue, setFormValue] = useState([]);

    const AddClients =(idCliente,nombres,nit, ciudad, direccion, telefono, email)=>{
      const clientsAdd={
          idCliente:idCliente,
          nombres: nombres,
          nit:nit,
          ciudad:ciudad,
          direccion:direccion,
          telefono:telefono,
          email:email
          
          
          }
          console.log(clientsAdd)

  

          fetch ('http://localhost:4000/api/clients',{
            method: 'POST',
            body: JSON.stringify(clientsAdd),
            headers:{
                "content-type" : "application/json; charset=UTF-8"

            }  
        })
        .then(resp=>resp.json())
        .then(console.log)

        alert("registro de cliente exitoso")

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


  const { nombres,nit, ciudad, direccion, telefono, email } = formValue;

  const handleSubmit = e => {
    e.preventDefault();
    AddClients(nombres,nit, ciudad, direccion, telefono, email);
  };

  return (
    <Fragment>
     
      <Form handleSubmit={handleSubmit}
          handleChange={handleChange}
           />

    </Fragment>
    
    
  );
}

export default ClientsFormApi;
