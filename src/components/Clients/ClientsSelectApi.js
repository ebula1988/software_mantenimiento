import React, {useEffect, useState} from 'react'
import SelectList from './SelectList'


const ClientsSelectApi = (props) => {

  const {handleChange}= props

  

  const [todosclientes, setTodosClientes] = useState([])

    useEffect(()=>{
        getClientsApi()

    },[])


    const getClientsApi= async ()=> {
      const data = await fetch('http://localhost:4000/api/clients')
      const clients = await data.json()
      console.log(clients)
      setTodosClientes(clients)
     
  }
   


  return (
    <SelectList todosclientes={todosclientes}
                handleChange={handleChange} 
    />
  )
}

export default ClientsSelectApi