import React, { Fragment, useEffect, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import './styles/inputsearch.css';
import '../Clients/styles/divlist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWrench,faTrashCan,faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
//import DivList from './DivList';
//import SelectList from './SelectList'


const ClientsListApi = () =>{
    const [todosclientes, setTodosClientes] = useState([])
    const [clientes, setClientes]= useState([]);
    const [busqueda, setBusqueda]= useState("");


    useEffect(()=>{
        getClientsApi()

    },[])

    const getClientsApi= async ()=> {
        const data = await fetch('http://localhost:4000/api/clients')
        const clients = await data.json()
        console.log(clients)
        setTodosClientes(clients)
        setClientes(clients);
       
       
    }

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }

      const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=todosclientes.filter((elemento)=>{
          if(elemento.nombres.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          || elemento.ciudad.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          
          ){
            return elemento;
          }
        });
        setClientes(resultadosBusqueda);
      }


    return <div className='div-app'>


        <div >
        <h1>lista de clientes</h1>
        <input
          className="controls-search"
          value={busqueda}
          placeholder="Búsqueda por Nombre o ciudad"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
          
        </button>
      </div>


      { clientes.map((client, index) =>(
        <Fragment>
             <ScrollToTop smooth color="#000" />
           
            
        <div
            className={ 'divlist'}
            key={index}>

            <div className={'div'}  key={client.id} >
               Cliente: {client.nombres} 
            </div> 

            <div className={'div'}  key={client.id} >
                Ciudad:{client.ciudad} 
            </div> 
           
                <button data-title="Agregar equipo al cliente" className="btn btn-primary">
            
                    <FontAwesomeIcon icon={faCirclePlus}/>
                    <Link to = {`/hardwareIdClientRouter/${client.idCliente}/${client.nombres}`}>Add</Link> {" "}
      
                  
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

export default ClientsListApi




