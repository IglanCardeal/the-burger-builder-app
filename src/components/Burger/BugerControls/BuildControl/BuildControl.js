import React from "react";
import classes from "./BuildControl.module.css";

// *****************************************************
// Componente para mostrar o ingredient e os botoes para
// controlar as quantidades
// *****************************************************

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.remove}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.add} disabled={props.limit}>
      More
    </button>
  </div>
);

// ** disabled atributo da tag button

export default buildControl;
