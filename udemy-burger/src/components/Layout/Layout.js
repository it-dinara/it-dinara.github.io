import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import s from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const Layout = (props) => (
	<Auxiliary>
		<Toolbar />
		<main className={s.Content}>
			{props.children}
		</main>
	</Auxiliary>
);

export default Layout;