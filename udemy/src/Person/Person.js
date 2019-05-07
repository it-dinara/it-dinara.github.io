import React from 'react';

const Person = (props) => {
	const rnd = Math.random();

	if (rnd>0.7) {
		throw new Error('Something went wrong!!!');
	}
	return (
		<div style={{background: '#34aaf13d', }}>
			<p onClick={props.qwe}>I'm {props.name} and I am {props.age} year old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} defaultValue={props.name} />
		</div>
	)
}

export default Person;