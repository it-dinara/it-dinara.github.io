import React, { Component } from 'react';
import s from './App.css';
import Person from './Person/Person';


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

      this.setState({
        persons: [
          { id: '0', name: 'Maximalian', age: '28'},
          { id: '1', name: event.target.value, age: '31'},
          { id: '2', name: 'Stephanie', age: '26'}
        ]
      })
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

      return (
        <div className={s.App}>
          <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
          {this.state.showPersons && (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person changed={(event) => this.nameChangedHandler(event, person.id)}
                  qwe={() => this.deletePersonHandler(index)}
                  key={person.id}
                  name={person.name}
                  age={person.age}/>
              })}
            </div>
          )}
        </div>
      )
    }
}

export default App;
