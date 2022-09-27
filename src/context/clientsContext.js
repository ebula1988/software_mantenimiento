import React, {createContext, useEffect, useState} from 'react'


const ClientsContext = createContext();

const ClientsProvider = ({ children }) => { 

    
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

    const data = { clientes:todosclientes }

    return (
        <ClientsContext.Provider value={data}>
            { children }
        </ClientsContext.Provider>
    )
}

export default ClientsContext