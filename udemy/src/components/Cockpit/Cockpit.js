import React, { useEffect, useRef, useContext } from 'react';
import s from './Cockpit.css'
import AuthContext from '../../context/auth-context';


const Cockpit = (props) => {
	const toggleBtnRef =useRef(null);
	const authContext = useContext(AuthContext);

	console.log(authContext.authenticated);

	useEffect(()=>{
		toggleBtnRef.current.click();
	}, [])

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
			<button 
			ref={toggleBtnRef}
			style={style} 
			onClick={props.toggled}>
				Switch Name
			</button>
			<button onClick={authContext.login}>Log in</button>
		</div>
	);
};

export default Cockpit;