import React from 'react';
import s from './BuildControl.css'

const BuildControl = (props) => (
    <div className={s.BuildControl}>
    <div className={s.Label}>{props.label}</div>
		<button className={s.Less}>Less</button>
		<button className={s.More}>More</button>
	</div>
);

export default BuildControl;