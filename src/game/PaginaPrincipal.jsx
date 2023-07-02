import { useState } from 'react'
import tenista from './../assets/tenista.gif'
import lesion from './../assets/bailando.gif'
import garin from './../assets/garin.jpg'
import garinfeliz from './../assets/garinfeliz.jpeg'
import './PaginaPrincipal.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function PaginaPrincipal() {
  const navigate = useNavigate();
  const [tableToShow, setTableToShow] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const navigateToAllTime = async () => {
    setTableToShow("allTime");
    await delay(100);
    bajar();
  };

  const navigateToWeekly = async () => {
    setTableToShow("weekly");
    await delay(100);
    bajar();
  };

  const bajar = () => {
    const element = document.getElementById('fondo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (

    <div className="PaginaPrincipal">
      <header>
        <div class="topnav">
          <a href="/">Inicio</a>
          <a class="active" href="/PaginaPrincipal">Página principal</a>
          <a href="/acerca_de">Sobre nosotros</a>
          <a href="/instructions">Instrucciones</a>
        </div>
      </header>
      <div>
        <h1>Raquetas y Lesiones</h1>
        <div class="flex-container">

          <img src={tenista} class="tenista" alt="tenista" />

          <img src={lesion} class="lesion" alt="esqueleto cumbia" />

        </div>
      </div>
      
      <h2>¿En qué consiste el juego?</h2>
      <div class="flex-container2">
        <h4>Raquetas y lesiones es un juego en el que el objetivo es llegar al final del tablero. Para lograr esto, cada jugador tendrá un turno en el que deben tirar un dado, y el resultado es el numero de espacios que avanzaran. <br /> <br />
          Durante sus jugadas, los jugadores pueden caer en una casilla de raqueta (que los hará avanzar por el tablero hasta donde esta llegue) y lesiones, que los harán retroceder de la misma manera.
          Por último, si un jugador cae en la casilla en la que esta otro jugador, deberan realizar un duelo para decidir quién avanza y quién retrocede.<br /> <br />
          Este duelo será mediante un lanzamiento de dados que emulará un partido de tenis (si el primer jugador saca 6 y el segundo 4, el primer jugador ganó el encuentro). Quién gane dos encuentros se lleva el partido.
          En caso de que ambos jugadores ganen un encuentro, se juega un tercero, y el ganador avanzará las casillas correspondientes al resultado del partido final del encuentro; y el perdedor retrocederá la misma cantidad.
          <br />
        </h4>
      </div>

      <h2> ¿Te animas a jugar y romper records?</h2>

      <div class="flex-container3">
        <button class="button" onClick={navigateToAllTime}>Ranking <br /> Todos los tiempos</button>
        <button class="button" onClick={navigateToWeekly}>Ranking <br /> semanal</button>
      </div>

      {tableToShow === 'allTime' && <AllTime />}
      {tableToShow === 'weekly' && <Weekly />}

      <footer className='footer'>  
        Una producción de Joaquín Bustamante y Gonzalo Valero
      </footer>

    </div>

  


  )

}

function AllTime(){
  return (
    <div class="wrapper">
  <table>
    <caption>Ranking Todos los tiempos</caption>
<tr>
  <th>Pos</th>
  <th>Nombre</th>
  <th>Puntaje</th>
  </tr>
 <tr>
  <td>1</td>
  <td>Kako</td>
  <td>14597</td>
 </tr>
<tr>
  <td>2</td>
  <td>Gonza</td>
  <td>13534</td>
</tr>
<tr>
  <td>3</td>
  <td>Martin</td>
  <td>13341</td>
</tr>
<tr>
  <td>4</td>
  <td>Lucas</td>
  <td>11973</td>
</tr>
<tr>
  <td>5</td>
  <td>Andy</td>
  <td>11433</td>
</tr>
<tr class="player">
  <td>6</td>
  <td>Diego</td>
  <td>11345</td>
 </tr>
<tr>
  <td>7</td>
  <td>Pancho</td>
  <td>8956</td>
</tr>
<tr>
  <td>8</td>
  
  <td>Rodrigo</td>
  <td>7833</td>
</tr>
<tr>
  <td>9</td>
  
  <td>Benjamin</td>
  <td>7096</td>
</tr>
<tr>
  <td>10</td>
  
  <td>Carlos</td>
  <td>6983</td>
</tr>
</table>
<div id="fondo"></div>
</div>

  )
}

function Weekly(){
  return (
    <div class="wrapper">
  <table>
    <caption>Ranking semanal</caption>
<tr>
  <th>Pos</th>
  <th>Nombre</th>
  <th>Puntaje</th>
  </tr>
 <tr>
  <td>1</td>
  <td>Gonza</td>
  <td>13534</td>
 </tr>
<tr>
  <td>2</td>
  <td>Lucas</td>
  <td>11973</td>
</tr>
<tr>
  <td>3</td>
  <td>Pancho</td>
  <td>8956</td>
</tr>
<tr>
  <td>4</td>
  <td>Carlos</td>
  <td>6983</td>
</tr>
<tr>
  <td>5</td>
  <td>Gustavo</td>
  <td>6523</td>
</tr>
<tr class="player">
  <td>6</td>
  <td>Tom</td>
  <td>5327</td>
 </tr>
<tr>
  <td>7</td>
  <td>John</td>
  <td>4986</td>
</tr>
<tr>
  <td>8</td>
  
  <td>Michael</td>
  <td>4656</td>
</tr>
<tr>
  <td>9</td>
  
  <td>Jack</td>
  <td>4335</td>
</tr>
<tr>
  <td>10</td>
  
  <td>Jonny</td>
  <td>4003</td>
</tr>
</table>
<div id="fondo"></div>

</div>




  )
}


export default PaginaPrincipal