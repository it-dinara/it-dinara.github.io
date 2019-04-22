import React, { Component } from 'react';
import './App.css';
import styled  from 'styled-components'

const Wip = styled.div`
  position: absolute;
  width: 150px;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #EEEEEE;
  border-right: 1px dotted;
`
const Droppable = styled.div`
	position: absolute;
	width: 150px;
	height: 100vh;
	right: 0;
	top: 0;
	background-color: #9E9E9E;
	border-left: 1px dotted;
`

const Draggable = styled.div`
	width: 100px;
	height: 100px;
	background-color: yellow;
	margin: 5px auto;
	line-height: 5em;
`

const TaskHeader = styled.span`
	display: inline-block;
	background-color: skyblue;
	width: 100%;
`

const ContainerDrag = styled.div`
	text-align: center;
`
const Header = styled.div`
	display: inline-block;
	margin: 0;
	padding: 0;
	background-color: #E0E0E0;
	width: 100%;
`
export default class AppDragDropDemo extends Component {
	state = {
		tasks: [
			{name: 'Angular', category:'wip', bgcolor: 'yellow',},
	        {name: 'React', category:'wip', bgcolor: 'pink',},
	        {name: 'Vue', category:'complete', bgcolor: 'skyblue',},
		]
	}

	onDragStart = (ev, id) => {
		console.log('dragstart:', id);
		ev.dataTransfer.setData('id', id); //id = t.name
	}

	onDragOver = (ev) => {
		ev.preventDefault();
	}

	onDrop = (ev, cat) => {
		let id = ev.dataTransfer.getData('id');

		let tasks = this.state.tasks.filter((task) => {
			if(task.name === id) {
				task.category = cat;
			}
			return task;
		});
		this.setState({
			...tasks
		});
	}

	render() {
		const tasks = {
			wip: [],
			complete: []
		}

		this.state.tasks.forEach((t) => {
			tasks[t.category].push(
				<div key={t.name}
					onDragStart = {(e) => this.onDragStart(e, t.name)}
					className="draggable"
					style={{backgroundColor: t.bgcolor}}
					draggable
				>
					{t.name}
				</div>
			);
		})
		return (
			<ContainerDrag>
				<Header>Drag & Drop Demo</Header>
				<Wip
				onDragOver={(e) => this.onDragOver(e)}
					onDrop={(e) => this.onDrop(e, 'wip')}>
					<TaskHeader>wip</TaskHeader>
					{tasks.wip}
				</Wip>
				<Droppable 
					onDragOver={(e) => this.onDragOver(e)}
					onDrop={(e) => this.onDrop(e, 'complete')}>
					<TaskHeader>completed</TaskHeader>
					{tasks.complete}
				</Droppable>
			</ContainerDrag>
		);
	}
}