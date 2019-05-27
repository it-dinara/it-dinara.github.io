import React from 'react';
import s from './Backdrop.css'


const Backdrop = (props) => (
	props.show ? <div className={s.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;