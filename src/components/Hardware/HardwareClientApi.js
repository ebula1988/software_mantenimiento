import React, { useContext, useEffect, useState, Fragment } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Link } from "react-router-dom";
import '../../styles/clients/ClientsList.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWrench,faTrashCan,faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from "react-scroll-to-top";






const HardwareClientApi = () => {
    const {idClienteParams} = useParams()
    //const {nombreClienteParams} = useParams()
    //console.log('soy el hpta ese q andop jodiendo',useParams)
    console.log(idClienteParams)

    const [hardwarelist, setHardwareList] = useState([])

    useEffect(()=>{
        getHardwareClientApi()

    },[])

    const getHardwareClientApi= async ()=> {
        const data = await fetch('http://localhost:4000/api/hardware/'+idClienteParams+'')
        const hardware = await data.json()
        console.log(hardware)
        setHardwareList(hardware)
        console.log(hardwarelist)
       
    }



  return <div className='div-app'>

<h1>lista de clientes</h1>

{ hardwarelist.map((hardware, index) =>(
        <Fragment>
             <ScrollToTop smooth color="#000" />
           
            
        <div
            className={ 'divlist'}
            key={index}>

            <div className={'div'}  key={hardware.id} >
               Cliente: {hardware.nombreEquipo} 
            </div> 

           
                <button data-title="Agregar equipo al cliente" className="btn btn-primary">
            
                    <FontAwesomeIcon icon={faCirclePlus}/>
                   
                </button>
                
              
           

            <button data-title="Ver o editar cliente" className="btn btn-success">
                <FontAwesomeIcon  icon={faWrench}/>
            </button> {" "}

            <button data-title="Eliminar cliente" className="btn btn-danger" >
                <FontAwesomeIcon icon={faTrashCan}/>
            </button>

        </div>

        

        </Fragment>
    


        
      ))

      }
        
        
       
      
      </div>


}



export default HardwareClientApi