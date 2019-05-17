import React, { Component } from 'react';
import s from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';


class App extends Component {
  state = {
    persons: [
      { id: '0-0', name: 'Max', age: 28},
      { id: '1-1', name: 'Manu', age: 29},
      { id: '2-2', name: 'Stephanie', age: 26}
    ],
    otherstate: 'some other value',
    showPersons: false, 
    chageCounter: 0
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
      this.setState((prevState, props) => {
        return {
          persons: persons,
          chageCounter: prevState.chageCounter + 1
        }
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
      return (
        <Auxiliary>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            toggled={this.togglePersonHandler}/>
          {this.state.showPersons && (
            <div>
              <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
            </div>
          )}
        </Auxiliary>
      )
    }
}

export default withClass(App, s.App);
