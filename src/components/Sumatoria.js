import React, {useState} from 'react';

function Sumatoria() {

  const [resultado, setResultado] = useState(1);

  const sumar = () => {

    setResultado(resultado+1);
  }

  const restar = () => {
    if(resultado>0)
    setResultado(resultado-1);
  }

  return (
    <>
    <div className="Sumatoria">
      <h1>suma</h1>
      <h3>Resultado: {resultado} </h3>
      {resultado === 0 ? <p>Ya no se puede restar</p> : null}
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
    </>
  );
}

export default Sumatoria;
