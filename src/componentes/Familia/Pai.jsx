import React from "react";
import Filho from "./Filho"

export default componentPai = () => {
    const propParaFilho = "compomente do pai que ta indo para o filho";
  
    return (
      <React.Fragment>
        <h1>Componente Pai</h1>
        <ChildComponent propDoPai={propParaFilho} />
      </React.Fragment>
    );
  }
  