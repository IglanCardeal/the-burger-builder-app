import React from "react";
import Aux from "../../../hoc/Aux";

// ***********************************************************
// Mostra no modal um sumario com a order, os ingredients,
// quantidade e preco final e um button para checkout
// ***********************************************************

const orderSummary = props => {
  // {salad: 2, meat: 1,...}
  const { ingredients } = props;
  const ingredientsSummary = [];
  for (let key in ingredients) {
    ingredientsSummary.push(key);
  }
  const renderSummary = ingredientsSummary.map((ingredient, index) => {
    // retorna um array de <li> ingredient: quantidade</li>
    return (
      <li key={ingredient + index}>
        <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:
        {ingredients[ingredient]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicius burger with the ingredients:</p>
      <ul>{renderSummary}</ul>
      <p>Final Price: ${props.totalPrice}</p>
      <p>Continue to Checkout</p>
    </Aux>
  );
};

export default orderSummary;
