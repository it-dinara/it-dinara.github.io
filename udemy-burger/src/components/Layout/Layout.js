import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import s from './Layout.css';

const Layout = (props) => (
	<Auxiliary>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={s.Content}>
			{props.children}
		</main>
	</Auxiliary>
);

export default Layout;