import { useEffect, useState, useContext } from 'react'
import garin2 from './../assets/garinpng.png'
import jarry2 from './../assets/jarrypng.png'
import raqueta from './../assets/raqueta.png'
import lesion from './../assets/yeso.png'
import './Juego.css'
import { useNavigate } from 'react-router-dom'
import Dado from './Dado'
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';


function Juego() {
  const [imagenes, setImagenes] = useState([]);
  const [jugadores, setJugadores] = useState([]);
  const [nombres, setNombres] = useState([]);
  const [jugadas_anteriores, setJugadasAnteriores] = useState([]);

  const { token, setToken, userId, setUserId, logout } = useContext(AuthContext);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/juego/1/posicion`)
        .then((response) => {
          setJugadores(response.data);
          setImagenes(["garin2", "jarry2"]);
          console.log(response.data);
          const nombre1 = response.data[0]["name"];
          const nombre2 = response.data[1]["name"];
          setNombres([nombre1, nombre2]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);


    return () => {
      clearInterval(interval);
    };
  }, []);

  const moveImage = (imageName, movimiento) => {
    const imageElement = document.getElementById(imageName);
    const computedStyles = getComputedStyle(imageElement);
    let top = parseFloat(computedStyles.getPropertyValue("top"));
    let left = parseFloat(computedStyles.getPropertyValue("left"));
    console.log("top, left", top, left)

    if (movimiento === "U") {
      top -= 122;
    } else if (movimiento === "D") {
      top += 122;
    } else if (movimiento === "L") {
      left -= 122;
    } else if (movimiento === "R") {
      left += 122;
    }

    imageElement.style.top = `${top}px`;
    imageElement.style.left = `${left}px`;
    console.log("top, left", top, left)
  };


  const posiciones_actuales = [];

  const handleListaExportacion = (listaExportacion) => {

    //console.log(listaExportacion);
    const id = listaExportacion[0];
    const numero_dado = listaExportacion[1];
    const position = listaExportacion[2];
    const gano_partida = listaExportacion[3];
    const cayo_en_raqueta = listaExportacion[4];
    const cayo_en_lesion = listaExportacion[5];
    const next_turn = listaExportacion[6];
    const movimientos = listaExportacion[7];
    const jugadorActivo = listaExportacion[8];

    setJugadasAnteriores((prevJugadas) => [
      { jugador: nombres[jugadorActivo - 1], posicion: position, dado: numero_dado, cayo_en_lesion, cayo_en_raqueta },
      ...prevJugadas.slice(0, 4),
    ]);

    for (let i = 0; i < movimientos.length; i++) {
      setTimeout(() => {
        moveImage(imagenes[jugadorActivo], movimientos[i]);
      }, i * 1000);
    }


  };



  return (
    <div className="Juego">

      <div className="topnav">
        <a href="/">Salir de la partida</a>
      </div>

      <div className="ContainerPrincipal">

        <div className="BarraJugadores">
          {jugadores.map((jugador) => (
            <div className={`Jugador${jugador.id}`} key={jugador.id}>
              <b>Jugador {jugador.id}: {jugador.name}</b>
              <br></br>
              <b>Ranking: {jugador.ranking}</b>
            </div>
          ))}
        </div>

        <div className="Tablero">

          <div className="A" id="10">10</div>
          <div className="B" id="9">9</div>
          <div className="A" id="8">8</div>
          <div className="B" id="7">7</div>
          <div className="R" id="6">6</div>
          <div className="B" id="5">5</div>
          <div className="A" id="4">4</div>
          <div className="B" id="3">3</div>
          <div className="L" id="2">2</div>
          <div className="B" id="1">1</div>

          <div className="B" id="11">11</div>
          <div className="A" id="12">12</div>
          <div className="L" id="13">13</div>
          <div className="A" id="14">14</div>
          <div className="B" id="15">15</div>
          <div className="A" id="16">16</div>
          <div className="B" id="17">17</div>
          <div className="A" id="18">18</div>
          <div className="B" id="19">19</div>
          <div className="A" id="20">20</div>

          <div className="A" id="30">30</div>
          <div className="B" id="29">29</div>
          <div className="A" id="28">28</div>
          <div className="B" id="27">27</div>
          <div className="A" id="26">26</div>
          <div className="B" id="25">25</div>
          <div className="A" id="24">24</div>
          <div className="R" id="23">23</div>
          <div className="A" id="22">22</div>
          <div className="L" id="21">21</div>

          <div className="B" id="31">31</div>
          <div className="L" id="32">32</div>
          <div className="B" id="33">33</div>
          <div className="R" id="34">34</div>
          <div className="B" id="35">35</div>
          <div className="A" id="36">36</div>
          <div className="B" id="37">37</div>
          <div className="A" id="38">38</div>
          <div className="B" id="39">39</div>
          <div className="R" id="40">40</div>

          <div className="A" id="50">50</div>
          <div className="B" id="49">49</div>
          <div className="A" id="48">48</div>
          <div className="B" id="47">47</div>
          <div className="A" id="46">46</div>
          <div className="B" id="45">45</div>
          <div className="L" id="44">44</div>
          <div className="B" id="43">43</div>
          <div className="A" id="42">42</div>
          <div className="B" id="41">41</div>

          <div className="L" id="51">51</div>
          <div className="A" id="52">52</div>
          <div className="B" id="53">53</div>
          <div className="A" id="54">54</div>
          <div className="R" id="55">55</div>
          <div className="A" id="56">56</div>
          <div className="B" id="57">57</div>
          <div className="A" id="58">58</div>
          <div className="L" id="59">59</div>
          <div className="A" id="60">60</div>

          <div className="A" id="70">70</div>
          <div className="R" id="69">69</div>
          <div className="A" id="68">68</div>
          <div className="B" id="67">67</div>
          <div className="A" id="66">66</div>
          <div className="B" id="65">65</div>
          <div className="A" id="64">64</div>
          <div className="B" id="63">63</div>
          <div className="R" id="62">62</div>
          <div className="B" id="61">61</div>

          <div className="L" id="71">71</div>
          <div className="A" id="72">72</div>
          <div className="B" id="73">73</div>
          <div className="A" id="74">74</div>
          <div className="B" id="75">75</div>
          <div className="A" id="76">76</div>
          <div className="B" id="77">77</div>
          <div className="A" id="78">78</div>
          <div className="B" id="79">79</div>
          <div className="A" id="80">80</div>

          <div className="A" id="90">90</div>
          <div className="B" id="89">89</div>
          <div className="A" id="88">88</div>
          <div className="B" id="87">87</div>
          <div className="L" id="86">86</div>
          <div className="B" id="85">85</div>
          <div className="A" id="84">84</div>
          <div className="R" id="83">83</div>
          <div className="A" id="82">82</div>
          <div className="B" id="81">81</div>

          <div className="L" id="91">91</div>
          <div className="A" id="92">92</div>
          <div className="B" id="93">93</div>
          <div className="R" id="94">94</div>
          <div className="B" id="95">95</div>
          <div className="A" id="96">96</div>
          <div className="B" id="97">97</div>
          <div className="A" id="98">98</div>
          <div className="B" id="99">99</div>
          <div className="A" id="100">100</div>



        </div>


        <div className="jugadores2">
          <div>
            <img id="garin2" className="garinpng2" src={garin2} alt="garinpng2" />
            <img id="jarry2" className="jarrypng2" src={jarry2} alt="jarrypng2" />
          </div>
        </div>


        <br></br>


        <Dado onListaExportacion={handleListaExportacion} />

      </div>

      <div className="ultimos_movimientos">
        <h2>Últimos movimientos:</h2>
        <ul>
          {jugadas_anteriores.map((jugada, index) => (
            <li key={index}>
              Jugador {jugada.jugador} estaba en el ranking {jugada.posicion} y avanzo {jugada.dado} casillas
              {jugada.cayo_en_raqueta && ", cayó en raqueta y avanzó 5 casillas más"}
              {jugada.cayo_en_lesion && ", cayó en lesion y retrocedio 5 casillas"}
            </li>
          ))}
        </ul>
      </div>


      <br></br>

    </div>
  )

}

export default Juego