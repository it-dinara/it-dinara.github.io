import React from 'react';
import s from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => (
	<header className={s.Toolbar}>
		<div>MENU</div>
		<Logo/>
		<nav>
			<NavigationItems/>
		</nav>
	</header>
);

export default Toolbar;