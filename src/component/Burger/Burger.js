import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgetIngredient/BurgerIngredient';

const burger = (props) => {
    return(
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;