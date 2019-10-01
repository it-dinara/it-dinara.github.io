import React from 'react';

import s from './Order.css';

const Order = (props) => (
	<div className={s.Order}>
		<p>Ingredients: Salad (1)</p>
		<p>Price: <strong>USD 5.45</strong></p>
	</div>
)

export default Order;