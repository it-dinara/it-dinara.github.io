import React from 'react';

import s from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
	<div>
		<ul className={s.NavigationItems}>
			<NavigationItem link="/" exact>Burger Builder</NavigationItem>
			<NavigationItem link="/orders" >Orders</NavigationItem>
		</ul>
	</div>

);

export default NavigationItems;