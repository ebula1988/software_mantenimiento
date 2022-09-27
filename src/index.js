import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import ClientsListRouter from './routes/clients/ClientsListRouter';
import HardwareListRouter from './routes/hardware/HardwareListRouter';
import HardwareIdRouter from './routes/hardware/HardwareIdRouter';
import HardwareClientRouter from './routes/hardware/HardwareClientRouter';


import TaskIdRouter from './routes/task/TaskIdRouter';

import ClientsFormRouter from './routes/clients/ClientsFormRouter';
import HardwareFormRouter from './routes/hardware/HardwareFormRouter';


ReactDOM.render(
  
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="/clientsListRouter" element={<ClientsListRouter />} />
      <Route path="/hardwareListRouter" element={<HardwareListRouter />} />
      <Route path="/hardwareIdClientRouter/:idClienteParams/:nombreClienteParams" element={<HardwareIdRouter />} />//ruta q me lleva al form
      <Route path="/hardwareClientRouter/:idClienteParams/" element={<HardwareClientRouter />} /> //ruta de lista de equipos por cliente


      <Route path="/taskIdRouter/:idEquipoParams/:nombreEquipoParams" element={<TaskIdRouter />} />


      <Route path="/clientsformRouter" element={<ClientsFormRouter />} />
      <Route path="/hardwareformRouter" element={<HardwareFormRouter />} />
    
   </Routes>
  </BrowserRouter>,
    
  document.getElementById('root')
);


