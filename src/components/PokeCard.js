import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
function PokeCard({pokemon}) {


const [datosPoke, setDatosPoke] = useState(null);
const [mensaje, setMensaje] = useState('No hay datos');
const [loading, setLoading] = useState(false);
const mostrarPokemon = () => {
   
    if(datosPoke && !loading)
    {
      return(

             <>
              <div className="PokeCard">
                <Card border="primary" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={datosPoke.sprites.front_shiny} />
                  <Card.Body>
                    <Card.Title>Nombre: {datosPoke.name}</Card.Title>
                    <Card.Text>
                      Peso: {datosPoke.weight} Altura: {datosPoke.height}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
               </>

        )
    }
    else
    {
      if(loading)
      {
       // console.log(loading);
       return <Spinner animation="grow" />
      }
      else
      { 
        return ( <Alert variant="warning">
      {mensaje}
      </Alert> )
        }
    }

}


useEffect(() => {
  const obtenerPokemon = async () => {
        setLoading(true);
        const response = await axios.get(pokemon);
        setDatosPoke(response.data);
        setLoading(false);
}
    //alert("Hola");


    if(pokemon)
     { 
       obtenerPokemon();
     }
    else
      {
        setMensaje('Selecione un pokemon');
      }

},[pokemon])


  return (
    mostrarPokemon()
  );
}

export default PokeCard;
