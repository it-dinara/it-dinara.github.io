import React, { Component } from 'react';
// import s from './OrderSummary.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
	componentWillUpdate() {
		// console.log('[OrderSummary] WillUpdate')
	}

	render () {
		const ingredientSummary = Object.keys( this.props.ingredients )
			.map(igKey => {
				return (
					<li key={igKey}>
						<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
					</li> );
		});
		return (
			<Auxiliary>
				<h3>Your Order</h3>
				<p>A delicios burger with following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><b>Total Price: {this.props.price.toFixed(2)}</b></p>
				<p>Continue to Checkout?</p>
				<Button btnType="Danger" clicked={this.props.purchanseCancelled}>CANCEL</Button>
				<Button btnType="Success" clicked={this.props.purchanseContinued} >CONTINUE</Button>
			</Auxiliary> 
		);
	}
}

export default OrderSummary;