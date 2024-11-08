import React, { Component } from 'react';
import {
	Route,
	Redirect
} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import * as actions from '../../store/actions/index'

class Checkout extends Component {

    
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {
		let summary = <Redirect to="/"/>
		if (this.props.ings) {
			let purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
			console.log('this.props.purchased', this.props.purchased)
			summary = (
				<div>
					{purchasedRedirect}
					<CheckoutSummary
						ingredients={this.props.ings}
						checkoutCancelled={this.checkoutCancelledHandler}
						checkoutContinued={this.checkoutContinuedHandler} />
					<Route 
						path={this.props.match.path + '/contact-data'} 
						component={ContactData}/>
						{/*render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price} {...props} />)} />*/}
				</div>
			);
		}
        return summary;
    }
}

const mapStateToProps = state => {
    return {
		ings: state.burgerReducer.ingredients,
		purchased: state.order.purchased
    }
}



export default connect(mapStateToProps)(Checkout);