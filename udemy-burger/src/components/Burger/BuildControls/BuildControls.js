import React from 'react';
import s from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => (
	<div className={s.BuildControls}>
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemove(ctrl.type)}
			/>
		))}
	</div>
);

export default BuildControls;