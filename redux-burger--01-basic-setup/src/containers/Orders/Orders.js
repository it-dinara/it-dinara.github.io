import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

    componentDidMount() {
		this.props.onFetchOrders(this.props.token)
    }

    render () {
		let redirect = null;
		if(!this.props.isAuthenticated) {
			redirect = <Redirect to='/'/>
		}

		let orders = <Spinner/>;
		if (!this.props.loading) {
			orders = this.props.orders.map(order => {
				console.log('key', order.id)
				return <Order
					key={order.id}
					ingredients={order.ingredients}
					price={order.price} />
			})
		}
        return <React.Fragment>
			{redirect}
			{orders}
		</React.Fragment>;
    }
}

const mapStateToProps = state => {
	return {
		loading: state.order.loading,
		orders: state.order.fetchedOrdersRes,
		token: state.auth.token,
		isAuthenticated: state.auth.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));