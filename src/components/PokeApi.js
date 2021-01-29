import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeApi = () => {

  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const obtenerDatos = async () => {
    try {
      setLoading(true);
      const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard');
      setLoading(false);
      setDatos(respuesta.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('Ocurrio un error');
    }
   
  }

  useEffect(() => {
    obtenerDatos();
  }, []);

  if(error) return <p>{error}</p>
  if(loading || !datos) return 'Cargando...';

  return ( 
    <div>
      <h1>{datos.name}</h1>
      <ul>
        {datos.abilities.map((ability, index) => (
          <li key={index}>
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default PokeApi;