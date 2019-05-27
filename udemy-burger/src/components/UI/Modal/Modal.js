import React from 'react';
import s from './Modal.css'

const Modal = (props) => (
	<div className={s.Modal}>
		{props.children}
	</div>
);

export default Modal;