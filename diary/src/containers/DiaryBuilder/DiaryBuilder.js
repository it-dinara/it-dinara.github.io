import React, { Component } from 'react'
import Button from '../../components/UI/Button/Button.js'

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
						<Button key={i} btnType="MenuButton">
							{item.text}
						</Button>
					))
				}
				
			</>
		)
	}
}

export default DiaryBuilder