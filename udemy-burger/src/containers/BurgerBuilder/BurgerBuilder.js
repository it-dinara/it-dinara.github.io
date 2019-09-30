import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.4,
	cheese: 1.3, 
	meat: 0.7,	
}

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
		loading: false
	}

	componentDidMount () {
		console.log(this.props)
		axios.get('https://react-my-burger-di.firebaseio.com/ingredients.json')
			.then(response => {
				this.setState({ingredients: response.data});
				// console.log('response.data', response.data)
			})
			.catch(error => {})
	}

	updatePurchaseState (ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey]
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({purchasable: sum > 0})

	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
		this.updatePurchaseState(updatedIngredients);
	}

	purchaseHandler = () => {
		this.setState({
			purchasing: true
		})
	}

	purchanseCancelHandler = () => {
		this.setState({
			purchasing: false
		})
	}

	purchaseContinueHandler = () => {
		// alert("You continue!")
		
		const queryParams = [];
		for(let i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		queryParams.push('price=' + this.state.totalPrice);
		const queryString = queryParams.join('&');
		
		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		})

	}


	render () {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}


		let burger = <Spinner />;
		let orderSummary = null;

		if (this.state.ingredients) {
			burger = (
				<Auxiliary>
					<Burger ingredients={this.state.ingredients}/>
					<BuildControls 
						ingredientAdded={this.addIngredientHandler}
						ingredientRemove={this.removeIngredientHandler}
						disabled={disabledInfo}
						price={this.state.totalPrice}
						purchasable={this.state.purchasable}
						ordered={this.purchaseHandler}
					/>
				</Auxiliary>
			)
			orderSummary = <OrderSummary 
						ingredients={this.state.ingredients}
						purchanseCancelled={this.purchanseCancelHandler}
						purchanseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>;
		}

		if (this.state.loading) {
			orderSummary = <Spinner/>;
		}

		return (
			<Auxiliary>
			<Modal show={this.state.purchasing} modalClosed={this.purchanseCancelHandler} >
				{orderSummary}
			</Modal>
			{burger}

			</Auxiliary>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);