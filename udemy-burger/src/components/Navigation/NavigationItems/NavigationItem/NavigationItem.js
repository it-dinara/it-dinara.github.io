import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavigationItem.css';

const NavigationItem = ( props ) => (
    <li className={s.NavigationItem}>
        <NavLink 
			to={props.link} 
			exact={props.exact}
			activeClassName={s.active}
			>
			{props.children}
		</NavLink>
    </li>
);

export default NavigationItem;