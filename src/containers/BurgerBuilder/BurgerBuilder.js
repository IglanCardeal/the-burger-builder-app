import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BugerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

// ***********************************************************
// Componente com a qtd de ingredientes, preco e controle
// dos mesmos e controle dos estados dos botoes 'less', 'more'
// e 'order'
// ***********************************************************

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchaseble: false,
    ordering: false
  };

  // se houver ao menos um ingredient, ativa o button da order
  updatePurchaseState = async () => {
    const disabledOrder = { ...this.state.ingredients };
    for (let key in disabledOrder) {
      if (disabledOrder[key] > 0) {
        await this.setState(prevState => {
          return {
            purchaseble: true
          };
        });
        break;
      } else {
        await this.setState(prevState => {
          return {
            purchaseble: false
          };
        });
      }
    }
  };
  // ----------------------------------------------------------

  addIngredientHandler = async type => {
    const updateIngredients = { ...this.state.ingredients };
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    updateIngredients[type] = this.state.ingredients[type] + 1;
    await this.setState(prevState => {
      return {
        ingredients: updateIngredients,
        totalPrice: newPrice
      };
    });
    await this.updatePurchaseState();
  };

  removeIngredientHandler = async type => {
    const updateIngredients = { ...this.state.ingredients };
    if (updateIngredients[type] > 0) {
      const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
      updateIngredients[type] = this.state.ingredients[type] - 1;
      await this.setState(prevState => {
        return {
          ingredients: updateIngredients,
          totalPrice: newPrice
        };
      });
      await this.updatePurchaseState();
    }
  };

  formatTotalPrice = () => {
    return parseFloat(this.state.totalPrice.toFixed(2));
  };

  render() {
    // quando a qtd de ingredientes for zero, desativa o botao 'less'
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      // { salad: true, meat: false... } true - disabled, false - enabled
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    // agora supondo que cada ingredient nao pode ter qtd maior do que 3
    const overLimit = { ...this.state.ingredients };
    for (let key in overLimit) {
      overLimit[key] = overLimit[key] >= 3;
    }

    return (
      <Aux>
        <Modal>
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.formatTotalPrice()}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          totalPrice={this.formatTotalPrice()}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          limit={overLimit}
          purchaseble={!this.state.purchaseble}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
