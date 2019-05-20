import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import s from './Person.css';
import AuthContext from '../../../context/auth-context';
 
class Person extends Component { 
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}


	componentDidMount() {
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
	}
	render() {
		return (
			<Auxiliary>
				<AuthContext.Consumer>
					{(context => 
						(context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>)
					)}
				</AuthContext.Consumer>
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} year old!</p>
				<p>{this.props.children}</p>
				<input 
				/*ref={(inputEl) => {this.inputElement = inputEl}}*/
				ref={this.inputElementRef}
				type="text" 
				onChange={this.props.changed} 
				defaultValue={this.props.name} />
			</Auxiliary>
		)
	}
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}


export default withClass(Person, s.Person);