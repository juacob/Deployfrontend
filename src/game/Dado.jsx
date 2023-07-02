import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Dado.css';
import { AuthContext } from '../auth/AuthContext';

export default function Dado({ onListaExportacion }) {
    const [jugadorActivo, setJugadorActivo] = useState(1);
    const [jugadores, setJugadores] = useState([]);

    const { token, setToken, userId, setUserId, logout } = useContext(AuthContext);
    // tenemos harcodeado el game (1) porque no logramos obtener la variable del game actual
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/juego/1/posicion`)
        .then(response => {
            const nombre1 = response.data[0]["name"];
            const nombre2 = response.data[1]["name"];

            setJugadores([nombre1, nombre2]);
        })
        .catch(error => {
            console.error(error);
        });


    const [value, setValue] = useState("");

    const [lesion, setLesion] = useState(false);
    const [raqueta, setRaqueta] = useState(false);

    const TirarDado = () => {

        //Jugador activo se mueve
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/juego/${jugadorActivo}/mover`)
            .then(response => {
                const { id, numero_dado, position, gano_partida, cayo_en_raqueta, cayo_en_lesion, next_turn, movimientos } = response.data;

                console.log(response.data);
                setJugadorActivo(next_turn);

                const randomValue = numero_dado;
                setValue(randomValue);

                const Nlesion = cayo_en_lesion;
                const Nraqueta = cayo_en_raqueta;

                setLesion(Nlesion);
                setRaqueta(Nraqueta);

                const lista_exportacion = [id, numero_dado, position, gano_partida, cayo_en_raqueta, cayo_en_lesion, next_turn, movimientos, jugadorActivo];
                onListaExportacion(lista_exportacion);
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (

        <div className='dado'>


            <h2>Lanzamiento del dado:</h2>


            <button className='boton_dado'><img src="src/assets/dado.png" alt="my image" onClick={TirarDado} /></button>

            <h2> Valor Obtenido: {value}</h2>

            {lesion && <br></br>}
            {raqueta && <br></br>}
            {lesion && <h2 className='lesion'>¡Cayó en una lesión!</h2>}
            {raqueta && <h2 className='raqueta'>¡Cayó en una raqueta!</h2>}

            <br></br>

            <h2> Turno de: {jugadores[jugadorActivo - 1]} </h2>


        </div>
    )
}