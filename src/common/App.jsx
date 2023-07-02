import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"
import Signup from '../profile/Signup'
import Login from '../profile/Login'
import AuthProvider from '../auth/AuthProvider'

function App() {
  const [count, setCount] = useState(0)

  return (


    <div className="App">


      <header className='Header'>
        <div className="topnav">
          <a className="active" href="/">Inicio</a>
          <a href="/PaginaPrincipal">Página principal</a>
          <a href="/acerca_de">Sobre nosotros</a>
          <a href="/instructions">Instrucciones</a>
        </div>
      </header>
      <img src={"src/assets/image.png"} className="logo" alt="Vite logo" />

      <h2> ¡Vive la experiencia del tour ATP! </h2>


      <div className='fotos'>

        <div className='container_rafa'>
          <img className="rafa" src={"src/assets/nadal.jpeg"} style={{ objectFit: 'cover' }} />
        </div>

        <div className='container_nole'>
          <img className="nole" src={"src/assets/nole.jpeg"} style={{ objectFit: 'cover' }} />
        </div>


      </div>


      <br></br>

      <br></br>

      <AuthProvider>
        <Login />
      </AuthProvider>

      <Signup />

      <br></br>
      <br></br>


      <div className='container_federer'>
        <img className="roger" src={"src/assets/roger.jpeg"} style={{ objectFit: 'cover' }} />
      </div>

      <footer className='footer'>
        <br></br>
        Una producción de Joaquín Bustamante y Gonzalo Valero
      </footer>










    </div>
  )
}

export default App
