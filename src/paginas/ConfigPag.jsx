import React from 'react';
import './ConfigPag.css'
import BarraLateral from '../componentes/BarraLateral';

const ConfigPag = (props) => {
  return (
    <div className="CnfPag-Cuerpo">

      <BarraLateral estilos={props.estilos} handleThemeClick={props.handleThemeClick}/>

      <div style={{width: "100%"}}>
        {props.colores.map(col => (
          <div style={{border: `dashed var(--${col})`}}><h1>{col}</h1>
            <div style={{backgroundImage: `linear-gradient(var(--${col}), #000`}}>
              <h2 style={{background: `var(--${col})`, color:"#000"}}>{col}</h2>
              <h2 style={{color: `var(--${col})`}}>{col}</h2>
            </div>
            <div style={{backgroundImage: `linear-gradient(var(--${col}), #fff`}}>
              <p style={{background: `var(--${col})`, color:"#fff"}}>{col}</p>
              <p style={{color: `var(--${col})`}}>{col}</p>
            </div>
            <div>
              <h2 style={{backgroundImage: `linear-gradient(var(--${col}), #fff`}}>{col}</h2>
              <h2 style={{
                backgroundImage: `linear-gradient(#fff, var(--${col})`,
                color: `var(--${col})`
              }}>{col}</h2>
            </div>
            <h1 style={{color: `var(--${col})`}}>{col}</h1>
          </div>
        ))}
      </div>

    </div>
  )
};
  
export default ConfigPag;