import React from 'react'
import { Link } from "react-router-dom";
import  '../../components/mainmenu/Menu.css'


function MainMenu() {
  return (

    <div>
          <div>
    

     <h1>Ingenieria Am7</h1>

<nav >

    < Link to="/clientslistRouter"> Clientes</Link>
    < Link to="/clientsFormRouter">Registro</Link>
	< Link to="/clientslistRouter">ver todos </Link>
    <Link to="/">opciones </Link>
    <Link to="/">home</Link>

	
	<div className="animation start-home"></div>
</nav>

<nav >

    < Link to="/registroclientes"> Equipos</Link>
    < Link to="/hardwareFormRouter">Registro</Link>
	< Link to="/registroinstructivos">ver todos </Link>
    <Link to="/menuprincipal">opciones </Link>
    <Link to="/menuprincipal">home</Link>
   

	
	<div class="animation start-home"></div>
</nav>

<nav >

    < Link to="/registroclientes"> Instructivos</Link>
    < Link to="/task">Registro</Link>
	< Link to="/registroinstructivos">ver por ID </Link>
    <Link to="/menuprincipal">opciones </Link>
    <Link to="/menuprincipal">home</Link>

	
	<div class="animation start-home"></div>
</nav>



    </div>
        


<p>
  By <span>am7 Ingenieria</span>
</p>


    </div>
    
  )
}

export default MainMenu