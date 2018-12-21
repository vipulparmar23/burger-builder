import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgetIngredient/BurgerIngredient';

const burger = (props) => { // [salad: 1, bacon: 1, cheese: 2, meat: 2]
    
    let transformedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            console.log('igKey: ', igKey);
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log('igKey inside second map function: ', props.ingredients[igKey]);
                console.log('i: ' ,igKey+i);
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
        console.log('TransformedIngredient: ',transformedIngredient);

        if(transformedIngredient.length === 0){
            transformedIngredient = <p>Please start adding ingredients!!</p>;
        }

    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;