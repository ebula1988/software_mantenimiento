import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import '../Clients/styles/select.css'

const SelectList = (props) => {

    const {todosclientes,handleChange}= props


  return (
  <div  >
    <select  className={ 'select'}>
        {
            todosclientes.map((client, index) =>(
                <option 
                value={index}
                onChange={handleChange}
                name='idCliente'
                
                > {client.idCliente}---{client.nombres}
                </option>

            ) )

        }
    </select>
  </div>
  )


}

export default SelectList