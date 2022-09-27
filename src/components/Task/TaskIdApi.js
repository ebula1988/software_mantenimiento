import React, { Fragment } from 'react'
import { useParams } from 'react-router';
import TaskFormFormApi from './TaskFormApi';
import TaskListIdApi from './TaskListIdApi';
import { Link } from "react-router-dom";

const TaskIdApi = () => {
    const {idEquipoParams} = useParams()
    const {nombreEquipoParams} = useParams()

   

  return (
    <Fragment>
       <TaskFormFormApi idEquipoParams={idEquipoParams}
                        nombreEquipoParams={nombreEquipoParams}/>                 
       <TaskListIdApi idEquipoParams={idEquipoParams}/>
       < Link to="/"> Terminar</Link>

    </Fragment>
   
   
  )
}

export default TaskIdApi