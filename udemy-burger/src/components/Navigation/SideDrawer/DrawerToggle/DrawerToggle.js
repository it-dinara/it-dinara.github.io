import React from 'react';
import s from './DrawerToggle.css';

const DrawerToggle = (props) => (
    <div className={s.DrawerToggle} onClick={props.clicked}>
    	<div></div>
    	<div></div>
    	<div></div>
    </div>
);

export default DrawerToggle;