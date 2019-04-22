import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28},
			{ name: 'Manu', age: 29},
			{ name: 'Stefanie', age: 26}
		],
		otherState: 'some other value'
	};

	swithNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 28},
				{ name: 'Manu', age: 29},
				{ name: 'Stefanie', age: 27}
			]
		})
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Max', age: 28},
				{ name: event.target.value, age: 29},
				{ name: 'Stefanie', age: 26}
			]
		})
	}

  render() {
    return (
      <div className="App">
      	<button onClick={this.swithNameHandler.bind(this, 'qwe')}>Swith Name</button>
        <Person 
        	name={this.state.persons[0].name} 
        	age={this.state.persons[0].age}/>
        <Person 
        	click={this.swithNameHandler.bind(this, '!!!')}
        	changed={this.nameChangedHandler} 
        	name={this.state.persons[1].name} 
        	age={this.state.persons[1].age}>My hobbies: Rasing</Person>
        <Person 
        	name={this.state.persons[2].name} 
        	age={this.state.persons[2].age}/>
      </div>
    );

  }
}

export default App;