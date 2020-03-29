import * as actionTypes from '../actions/actionTypes';

const initialState = {
	orders: [],
	loading: false,
	purchased: false,
	fetchedOrdersRes: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_INIT:
			return {
				...state,
				purchased: false
			}
		case actionTypes.PURCHASE_BURGER_START:
			return {
				...state,
				loading: true
			}
		case actionTypes.PURCHASE_BURGER_SUCCESS: 
			const newOrder = {
				id: action.orderId,
				...action.orderData,
			}
			return {
				...state,
				loading: false,
				orders: state.orders.concat(newOrder),
				purchased: true
			}
		case actionTypes.PURCHASE_BURGER_FAIL:
			return {
				...state,
				loading: false,

			}
		case actionTypes.FETCH_ORDERS_START:
			return {
				...state,
				loading: true,
			}
		case actionTypes.FETCH_ORDERS_SUCCESS:
			const fetchedOrdersRes = [];
			for (let key in action.fetchedOrders) {
				fetchedOrdersRes.push({
					...action.fetchedOrders[key],
					id: key
				});
			}
			return {
				...state,
				loading: false,
				fetchedOrdersRes: fetchedOrdersRes,
			}
		case actionTypes.FETCH_ORDERS_FAIL:
			return {
				...state,
				loading: false,
			}
		default:
			return state;
	}
}

export default reducer;