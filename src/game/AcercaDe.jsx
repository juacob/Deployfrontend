import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import "./AcercaDe.css"

function AcercaDe() {
  const [count, setCount] = useState(0)

  return (

    <div className="AcercaDe">

      <header className='Header'>
      <div class="topnav">
      <a href="/">Inicio</a>
      <a  href="/PaginaPrincipal">Página principal</a>
      <a class="active" href="/acerca_de">Sobre nosotros</a>
      <a href="/instructions">Instrucciones</a>
    </div>
      </header>

      <h2> Quiénes somos: </h2>


      <br>
      </br>
      <br>
      </br>

      <div className='perfiles'>

        <div className="caco">
          <h2>Juaquín Bustamante</h2>
          <img className='foto_caco' src={"src/assets/caco.jpg"} style={{ objectFit: 'cover' }}/>
          <br></br>
          <h3>Ingeniería Civil Industrial, Major Investigación Operativa, Minor TI.</h3>
          <br>
          </br>
          <h3> Tenista Favorito:</h3> <b>Cristián Garín</b>
          <br>
          </br>
          <h3> Mejor de todos los tiempos:</h3> <b>Roger Federer</b>


        </div>


        <div className="chalo">
          <h2>Gonzalo Valero</h2>
          <img className='foto_chalo' src={"src/assets/chalo.jpg"} style={{ objectFit: 'cover' }}/>
          <h3>Ingeniería Civil Industrial, Major Investigación Operativa, Minor TI.</h3>
          <br>
          </br>
          <h3> Tenista Favorito:</h3> <b>Gael Monfils</b>
          <br>
          </br>
          <h3> Mejor de todos los tiempos:</h3> <b>Rafael Nadal</b>


        </div>

      </div>

      <footer className='footer'>  
        <br></br>
        Una producción de Joaquín Bustamante y Gonzalo Valero
      </footer>




    </div>

  )
}

export default AcercaDe
