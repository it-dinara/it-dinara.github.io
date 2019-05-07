import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	}

	static getDerivedStateFromError(error) {
	    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
	    return { hasError: true };
	  }




	render () {
		console.log(this.state)
		if(this.state.hasError) {
			return <h1>{this.state.errorMessage.toString()}</h1>;
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;