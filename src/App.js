import React, { useEffect, useState } from "react";
import '../src/style.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json)
        })
    }
    
    loadApi()

  }, [])

  return (
    <div className="container">
      <header>
        <strong>Nutrição</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} className="capa"/>
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default App;
