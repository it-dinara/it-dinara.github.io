import React, { Component } from 'react'
import Button from '../../components/UI/Button/Button.js'
import s from './DiaryBuilder.css'

const diaryMenuTitle = [
	{
		text: 'Чувства',
	},
	{
		text: 'Тело',
	},
	{
		text: 'Знакомо/Не знакомо',
	},
	{
		text: 'Голос критика',
	},
	{
		text: 'Любящий родителя',
	},
	{
		text: 'Решение',
	},
	{
		text: 'Вывод',
	},
]

class DiaryBuilder extends Component {
	render() {
		return (
			<>
				{
					diaryMenuTitle.map((item, i) => (
						<div className={s.SideBar}>
							<Button key={i} btnType="MenuButton">
								{item.text}
							</Button>
						</div>
					))
				}
				
			</>
		)
	}
}

export default DiaryBuilder