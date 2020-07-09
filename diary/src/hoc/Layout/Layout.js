import React, { Component } from 'react'
import s from './Layout.css'


class Layout extends Component {
	render() {
		return(
			<>
				<main className={s.Content}>
					{this.props.children}
				</main>
			</>
		)
	}
}