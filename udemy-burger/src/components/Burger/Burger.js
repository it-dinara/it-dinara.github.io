import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import s from './Burger.css';

const Burger = (props) => {
	return (
			<div className={s.Burger}>
				<BurgerIngredient type='bread-top'/>
				<BurgerIngredient type='cheese'/>
				<BurgerIngredient type='meat'/>
				<BurgerIngredient type='salad'/>
				<BurgerIngredient type='bacon'/>
				<BurgerIngredient type='bread-bottom'/>
			</div>
		);
};

export default Burger;