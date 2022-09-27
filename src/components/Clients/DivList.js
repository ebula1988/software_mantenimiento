import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import React from 'react'
import '../Clients/styles/divlist.css'


const DivList = (props) => {
  

    const {todosclientes}= props


  return todosclientes.map((client, index) => (
        
        
        <div
            className={ 'divlist'}
            key={index}>
         
            <div key={client.id} >
                 {client.nombres} 
           </div> 
          
           <div key={client.id} >
                 {client.ciudad} 
           </div> 
          

            
           

        <div className='icons'>
        <RiCloseCircleLine
          //onClick={() => RemoveClient(client.idCliente)}
          className='delete-icon'
        />
         <TiEdit
          className='edit-icon'
        />

         </div>
      
      </div>
        
       
       
     
  ))
}

export default DivList