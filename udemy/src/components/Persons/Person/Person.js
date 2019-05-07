import React from 'react';

const Person = (props) => {
	return (
		<div style={{background: '#34aaf13d', }}>
			<p onClick={props.click}>I'm {props.name} and I am {props.age} year old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} defaultValue={props.name} />
		</div>
	)
}

export default Person;