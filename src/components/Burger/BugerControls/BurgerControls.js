import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BurgerControls.module.css';

const control = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const burgerControls = props => (
    <div className={classes.BurgerControls}>
        {control.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                add={() => props.addIngredient(ctrl.type)} />
        })}
    </div>
);

export default burgerControls;