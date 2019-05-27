import React from 'react';
import s from './Button.css';

const Button = (props) => (
	<button
		className={[s.Button, s[props.btnType]].join(' ')}
		onClick={props.clicked}
	>
		{props.children}
	</button>
);

export default Button;