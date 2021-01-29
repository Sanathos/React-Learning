import React, {useState} from 'react';
import PokeList from './components/PokeList'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PokeCard from './components/PokeCard'


function App() {

  const [dato,setDato] = useState('');

  const nuevoPokemon = url => {
    setDato(url);
  }
 
  return (

  <Container style={{marginTop:"50px"}}>
    <Row>
        <Col>
          <div className="App">
          <PokeList dato={dato} nuevoPokemon={nuevoPokemon} />
          </div>
        </Col>
        <Col><PokeCard pokemon={dato}/></Col>
      </Row>
    </Container>
  );
}

export default App;
