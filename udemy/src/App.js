import React, { Component } from 'react';
import s from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Max', age: '28'},
      { id: '1', name: 'Manu', age: '29'},
      { id: '2', name: 'Stephanie', age: '26'}
    ],
    otherstate: 'some other value',
    showPersons: false
  }

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      })

      const person = { 
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});

    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      })
    }

    render() {
      const style = {
        cursor: 'pointer',
        background: 'red'
      }

      const classes = [];
      if (this.state.persons.length <= 2) {
        classes.push(s.red);
      }
      if (this.state.persons.length <= 1) {
        classes.push(s.bold);
      }

      return (
        <div className={s.App}>
          <h1>Hi, I'm React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
          {this.state.showPersons && (
            <div>
              {this.state.persons.map((person, index) => {
                return <ErrorBoundary key={person.id}>
                  <Person 
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                    qwe={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}/>
                </ErrorBoundary>
              })}
            </div>
          )}
        </div>
      )
    }
}

export default App;
