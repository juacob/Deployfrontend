import './Instructions.css'
import subida from './../assets/subida.jpg'
import garinpng from './../assets/garinpng.png'
import { useEffect } from 'react';
import Dado from './Dado'

export default function Instructions() {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const botongarin = document.getElementById('botongarin');
        const garin = document.getElementById('garin');
        botongarin.addEventListener('click', mouseClicked);
        return () => {

        }
    }, []);

    async function mouseClicked (event){   
        await delay(1000);
        garin.style.left = "40.6vw";
        await delay(1000);
        garin.style.left = "50.4vw";
        await delay(1000);
        garin.style.left = "60.2vw";
        await delay(1000);
        garin.style.top = "1vw";
        garin.style.left = "40.6vw";
        await delay(4000);
        garin.style.top = "40.5vw";
        garin.style.left = "30.8vw";
        botongarin.removeEventListener('click', mouseClicked);
        

}

    return (
        <div className="Instrucciones">

            <header>
                <div className="topnav">
                    <a href="/">Inicio</a>
                    <a  href="/PaginaPrincipal">Página principal</a>
                    <a href="/acerca_de">Sobre nosotros</a>
                    <a className="active" href="/instructions">Instrucciones</a>
                </div>
            </header>

            <div className='texto' >

            <h2>Instrucciones</h2>

        
            <h2>¡Bienvenido a Raquetas y Lesiones! : </h2> 

                <br></br>
                <br></br>

                <div>
                    En este juego, el objetivo es llegar al ranking número 1. Para ello, tú y tus amigos deben comenzar como tenista amateur, en el ranking Nº100.  
                    <br></br>
                    A medida que vayan tirando dados y avanzando, irán progresando en su carrera tenística, ¡Hasta convertirse en el Nº 1 del mundo!. 
                    Pero, ¡Cuidado! porque puedes caer en una lesión (que te hace retroceder), o en una raqueta (que te ayuda a avanzar).

                    <br></br>
                    <br></br>
                    
                </div>
                
                <div id='texto_instrucciones'> 
                    Las instrucciones son las siguientes:
                    <br></br>
                    <br></br>
        
                    1. Coloca todas las fichas en la casilla de salida.
                    <br></br>
                    <br></br>
                    2. Todos los jugadores tiran los dados. El jugador que saque el número más alto será el jugador inicial.
                    <br></br>
                    <br></br>
                    3. El jugador inicial lanza los dados.
                    <br></br>
                    <br></br>
                    4. Avanza tu ficha el número de casillas que indican los dados.
                    <br></br>
                    <br></br>
                    5. Si caes en una casilla con una imagen de raqueta de tenis, avanzas 5 casillas.
                    <br></br>
                    <br></br>
                    6. Si caes en una casilla con una imagen de lesión, retrocedes 5 casillas.
                    <br></br>
                    <br></br>
                    7. Si caes sobre otro jugador, ¡Se juega un partido!: Este será mediante un lanzamiento de dados que emulará un partido de tenis (si el primer jugador saca 6 y el segundo 4, el primer jugador ganó el encuentro). Quién gane dos encuentros se lleva el partido.
                    En caso de que ambos jugadores ganen un encuentro, se juega un tercero, y el ganador avanzará las casillas correspondientes al resultado del partido final del encuentro; y el perdedor retrocederá la misma cantidad.
                    <br></br>
                    <br></br>
                    8. El siguiente jugador lanza los dados y repite los pasos 4 a 7.
                    <br></br>
                    <br></br>
                    9. El juego continúa hasta que alguien llega a la casilla final.
                    <br></br>
                    <br></br>
                    10. El primer jugador en llegar a la casilla final gana el juego, ¡y será el mejor tenista del mundo!.
                    <br></br>
                    <br></br>
                </div>

            </div>

        <Dado />

        <div className="imagenes">
            <button id="botongarin" className="button1" >Mostrar funcionamiento raqueta</button>
                <div>
                    <img id="garin" className= "garinpng" src={garinpng} alt="garinpng" />
                </div>
        </div>

        <footer className='footer'>  
            <br></br>
            Una producción de Joaquín Bustamante y Gonzalo Valero
        </footer>
        
        </div>

        
    )
}