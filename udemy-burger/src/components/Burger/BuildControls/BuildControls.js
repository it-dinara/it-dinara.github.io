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
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemove(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button 
			className={s.OrderButton}
			disabled={!props.purchasable}
			onClick={props.ordered}
		>ORDER NOW</button>
	</div>
);

export default BuildControls;