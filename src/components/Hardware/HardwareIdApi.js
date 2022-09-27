import React, { Fragment } from 'react'
import { useParams } from 'react-router';
import HardwareFormApi from './HardwareFormApi';



const HardwareIdApi = () => {
    const {idClienteParams} = useParams()
    const {nombreClienteParams} = useParams()



  return (
    <Fragment>
       <HardwareFormApi idClienteParams={idClienteParams}
                        nombreClienteParams={nombreClienteParams}/>                 


    </Fragment>
  )
}

export default HardwareIdApi