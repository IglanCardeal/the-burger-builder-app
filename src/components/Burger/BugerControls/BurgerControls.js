import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BurgerControls.module.css";

// *****************************************************
// Renderiza o button de order e o preco final com
// com base no estado e os botoes relacionados com os
// numeros de ingredients no estado
// *****************************************************

const control = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const burgerControls = props => (
  <div className={classes.BurgerControls}>
    <h3>Total Price: ${props.totalPrice}</h3>
    {control.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.addIngredient(ctrl.type)}
          remove={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          limit={props.limit[ctrl.type]}
        />
      );
    })}
    <button className={classes.OrderButton} disabled={props.purchaseble}>
      ORDER NOW
    </button>
  </div>
);

export default burgerControls;
