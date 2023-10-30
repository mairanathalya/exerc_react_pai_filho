import React from "react";
import Filho from "./Filho";

export default componentePadrastro = (props) =>{
    return(
        <React.Fragment>
        <h1>Componente Padrastro</h1>
        <ChildComponent propParaFilho="Prop passada diretamente" />
      </React.Fragment>
    )
}