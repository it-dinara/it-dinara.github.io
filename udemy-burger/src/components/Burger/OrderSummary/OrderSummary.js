import React from 'react';
// import s from './OrderSummary.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = ( props ) => {

	const ingredientSummary = Object.keys( props.ingredients )
		.map(igKey => {
			return (
				<li key={igKey}>
					<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
				</li> );
		});

	return (
		<Auxiliary>
			<h3>Your Order</h3>
			<p>A delicios burger with following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.purchanseCancelled}>CANCEL</Button>
			<Button btnType="Success" clicked={props.purchanseContinued}>CONTINUE</Button>
		</Auxiliary> 
	);
};

export default OrderSummary;