import React, { Component } from 'react';
import s from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
	render () {

		let ingredient = null;

		switch (this.props.type) {
			case('bread-bottom'):
				ingredient = <div className={s.BreadBottom}></div>;
				break;
			case ('bread-top'):
				ingredient = (
				<div className={s.BreadTop}>
					<div className={s.Seeds1}></div>
					<div className={s.Seeds2}></div>
				</div>
				);
				break;
			case ('meat'): 
				ingredient = <div className={s.Meat}></div>;
				break;
			case ('cheese'): 
				ingredient = <div className={s.Cheese}></div>;
				break;
			case ('bacon'): 
				ingredient = <div className={s.Bacon}></div>;
				break;
			case ('salad'): 
				ingredient = <div className={s.Salad}></div>;
				break;
			default:
				ingredient = null;
		}
		return ingredient;
	}
};


export default BurgerIngredient;

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};