import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
    let transformedIngredients = Object.keys(ingredients)
        .map(ingredient => {
            return [...Array(ingredients[ingredient])].map((el, index) => {
                return <BurgerIngredient key={ingredient + index} type={ingredient} />
            })
        })
        .reduce((accumulated, actual) => {
            return accumulated.concat(actual);
        }, []);;

    const hasNoIngredient = Boolean(transformedIngredients.length === 0);

    if (hasNoIngredient)
        transformedIngredients = <p>Please, add some ingredients!</p>;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;