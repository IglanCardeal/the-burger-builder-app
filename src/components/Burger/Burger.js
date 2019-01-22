import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// *****************************************************
// renderiza BugerIngredient com base no tipo
// do ingredient
// *****************************************************

const burger = ({ ingredients }) => {
  // ingredients = {salad: 2, meat: 0, ...}
  let transformedIngredients = Object.keys(ingredients) // ['salad', 'meat',...]
    .map(ingredient => {
      return [...Array(ingredients[ingredient])] // [2, 0, ...]
        .map((el, index) => {
          return (
            <BurgerIngredient key={ingredient + index} type={ingredient} />
          );
        });
    })
    .reduce((accumulated, actual) => {
      // concatena o array com o valor atual, para no final termos um array
      // de componentes
      // [<BurgerIngredient...>, <BurgerIngredient...>, ...]
      return accumulated.concat(actual);
    }, []);

  const hasNoIngredient = Boolean(transformedIngredients.length === 0);

  if (hasNoIngredient)
    transformedIngredients = <p>Please, add some ingredients!</p>;

  // transformedIngredients sera um array de componentes a ser renderizado
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
