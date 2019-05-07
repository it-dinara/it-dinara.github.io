import React from 'react';
import s from './Cockpit.css'

const cockpit = (props) => {
	const style = {
	  cursor: 'pointer',
	  background: 'red'
	}
	const classes = [];
	if (props.persons.length <= 2) {
	  classes.push(s.red);
	}
	if (props.persons.length <= 1) {
	  classes.push(s.bold);
	}
	return (
		<div>
			<h1>{props.title}</h1>
			<p className={classes.join(" ")}>This is really working!</p>
			<button style={style} onClick={props.toggled}>Switch Name</button>
		</div>
	);
};

export default cockpit;