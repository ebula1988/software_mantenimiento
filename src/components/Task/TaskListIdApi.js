import React, { useEffect, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Link } from "react-router-dom";






const TaskListIdApi = (props) =>{
    const {idEquipoParams}=props
    const [tasklistId, setTaskListId] = useState([])

    useEffect(()=>{
        getListIdApi()

    },[tasklistId])

    

    const getListIdApi= async ()=> {
        const data = await fetch('http://localhost:4000/api/task/'+idEquipoParams+'')
        console.log(data)
        const list = await data.json()
        console.log(list)
        setTaskListId(list)  
    }

    const deleteClientIdApi= async ()=> {
      const data = await fetch('http://localhost:4000/api/clients/'+idEquipoParams+'')
      const list = await data.json()
      setTaskListId(list)  
  }

  const deleteClientIdApiprueba=  ()=> {
    console.log("soyla fuincion") 
}


    return tasklistId.map((taskl, index) => (
    <div
        className={ 'todo-row'}
        key={index}>
           <div key={taskl.idEquipo}  >
                 {taskl.tarea} 
                 {taskl.idEquipo}
                 
           </div>

        <div className='icons'>
          <RiCloseCircleLine
          onClick={() => console.log("hello sou yo")}
          className='delete-icon'
        />
          <TiEdit 
          className='edit-icon'
          />
        </div>

        
    </div>

      )) 
      
        
    
}

export default TaskListIdApi




