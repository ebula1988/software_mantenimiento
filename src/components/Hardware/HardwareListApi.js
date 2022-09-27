import React, { useContext, useEffect, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Link } from "react-router-dom";
import '../../styles/clients/ClientsList.css';


const HardwareListApi = () =>{

    const [hardwarelist, setHardwareList] = useState([])

    useEffect(()=>{
        getHardwareApi()

    },[])

    const getHardwareApi= async ()=> {
        const data = await fetch('http://localhost:4000/api/hardware')
        const hardware = await data.json()
        console.log(hardware)
        setHardwareList(hardware)
        console.log(hardwarelist)
       
    }


    return hardwarelist.map((hardware, index) => (
        
        <div
            className={ 'todo-row'}
            key={index}>
         
            <div key={hardware.idEquipo} >
                 {hardware.nombreEquipo} 
                 {hardware.modeloEquipo} 
                 {hardware.idEquipo}
           </div>

  
           <Link to = {`/taskIdRouter/${hardware.idEquipo}/${hardware.nombreEquipo}`}>agregar Instructivo prueba</Link>
           

        <div className='icons'>
        <RiCloseCircleLine
          //onClick={() => RemoveClient(client.id)}
          className='delete-icon'
        />
         <TiEdit
          
          className='edit-icon'
        />


         </div>
        
      </div>
        
       
       
      )) 

      
    

    



}

export default HardwareListApi




