import React from "react";
import Pai from "./Pai";

export default componenteFilho = (props) => {
    return (
      <React.Fragment>
        <h2>Componente Filho</h2>
        <p>Prop recebida do pai: {props.propParaFilho}</p>
      </React.Fragment>
    );
  }