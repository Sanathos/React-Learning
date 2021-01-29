import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
function PokeList({nuevoPokemon,dato}) {

  const [lista, setLista] = useState([]);
  const obtenerDatos =  async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500');
       // console.log(response.data.results);
        setLista(response.data.results);

     }

  useEffect(()=>{

     // alert("Hola");
     obtenerDatos();

  },[])

  if(!lista) return 'Cargando....'
  return (
    <>
   

     <div className="PokeList">


     <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Escoge un Pokémon</Form.Label>
      <Form.Control as="select"value={dato} onChange={(event) => {
          nuevoPokemon(event.target.value);
          
        }}> 
        <option value="">Elije una opción...</option>
        {

        lista.map((pokemon,i)=> (

          <option key={i} value={pokemon.url}>{pokemon.name}</option>

        ))
        }
 
      </Form.Control>
    </Form.Group>

    </div>
 

    </>
  );
}

export default PokeList;
