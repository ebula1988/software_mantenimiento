import React from 'react'
import ClientsListApi from '../../components/Clients/ClientsListApi';
import { Link } from "react-router-dom";



function ClientsListRouter() {

  return (
    <div >
      <ClientsListApi/>

      <Link to="/">home</Link>

    </div>

  )
}

export default ClientsListRouter
