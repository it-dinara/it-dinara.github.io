import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';


const Person = (props) => {
	return (
		<Auxiliary style={{background: '#34aaf13d', }}>
			<p onClick={props.click}>I'm {props.name} and I am {props.age} year old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} defaultValue={props.name} />
		</Auxiliary>
	)
}

export default Person;