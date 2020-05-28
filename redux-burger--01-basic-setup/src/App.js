import React, { Component } from 'react';
import {
	Route,
	Switch,
	withRouter,
	Redirect
} from 'react-router-dom';
import {connect} from 'react-redux'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index'

class App extends Component {
	componentDidMount() {
		this.props.authCheckState();

		const expirationDate = localStorage.getItem('expirationDate');
		console.log('expirationDate', expirationDate)
	}

	render () {
		let router = <Switch> 
						<Route path="/auth" component={Auth} />
						<Route path="/" exact component={BurgerBuilder} />
						<Redirect to='/'/>
					</Switch>
		if(this.props.isAuthenticated) {
			router = <Switch>
						<Route path="/logout" component={Logout}/>
						<Route path="/checkout" component={Checkout} />
						<Route path="/orders" component={Orders} />
						<Route path="/" exact component={BurgerBuilder} />
						<Redirect to='/'/>
					</Switch>
		}

		return (
			<div>
			<Layout>
				{router}
			</Layout>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		authCheckState: () => dispatch(actions.authCheckState())
	}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
