import React from 'react';
import s from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
	<header className={s.Toolbar}>
		<DrawerToggle clicked={props.drawerToggleClicked}/>
		<Logo/>
		<nav className={s.DesktopOnly}>
			<NavigationItems/>
		</nav>
	</header>
);

export default Toolbar;