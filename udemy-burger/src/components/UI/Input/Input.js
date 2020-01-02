import React from 'react';
import s from './Input.css'

const Input = (props) => {

	let inputElement = null;

	switch (props.inputtype) {
		case ('input'):
			inputElement = <input className={s.InputElement} {...props} />;
			break;
		case ('textarea'):
			inputElement = <textarea className={s.InputElement} {...props} />;
			break;
		default:
			inputElement = <input className={s.InputElement} {...props} />;
	}
	return (
	<div className={s.Input}>
		<label>{props.label}</label>
		{inputElement}
	</div>
	)
};

export default Input;