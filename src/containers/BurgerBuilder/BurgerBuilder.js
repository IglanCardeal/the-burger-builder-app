import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BugerControls/BurgerControls';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    }

    addIngredientHandler = type => {
        // const oldQty = this.state.ingredients[type];
        // const oldPrice = this.state.totalPrice;
        // const additionalPrice = INGREDIENTS_PRICE[type];
        const newQty = this.state.ingredients[type] + 1;
        const updateIngredients = { ...this.state.ingredients };
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        updateIngredients[type] = newQty;
        this.setState(prevState => {
            return {
                ingredients: updateIngredients,
                totalPrice: newPrice
            };
        })
    }

    removeIngredientHandler = type => {
        
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls addIngredient={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;