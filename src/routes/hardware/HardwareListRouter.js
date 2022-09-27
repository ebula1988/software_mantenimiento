import React from 'react'
import HardwareListApi from '../../components/Hardware/HardwareListApi';

const HardwareListRouter=() => {

  return (
    <div className='todo-app' >
            <h1>lista de equipos</h1>
            <HardwareListApi/>
    </div>

  )
}

export default HardwareListRouter