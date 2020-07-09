import React from 'react'
import s from './Button.css'

const button = (props) => (
	<button 
		onClick={props.clicked}
		className={[s.Button, s[props.btnType]].join(' ')}
		>
		{props.children}
	</button>
)

export default button