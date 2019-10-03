import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import s from './Burger.css';

const Burger = (props) => {
	// console.log(props)
	let transformedIngredients = Object.keys( props.ingredients )
	.map( igKey => {
			return [...Array(props.ingredients[igKey] )].map((_, i) => {
				return <BurgerIngredient type={igKey} key={igKey + i}/>
			})
		}).reduce((arr, el) => {
			return arr.concat(el)
		}, [])
	if(transformedIngredients.length === 0) {
		transformedIngredients = <p>Plase start adding ingredients!</p>
	}
	return (
			<div className={s.Burger}>
				<BurgerIngredient type='bread-top'/>
				{transformedIngredients}
				<BurgerIngredient type='bread-bottom'/>
			</div>
		);
};

export default Burger;