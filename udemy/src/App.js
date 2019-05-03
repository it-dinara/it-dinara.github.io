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

  // nameChangeHandler = ( event, id ) => {
  //   const personindex = this.state.persons.findIndex( p => {
  //     return p.id === id;
  //   })
  // }

  // if ( this.state.showPersons ) {
  //   persons = ()
  // }
}

export default App;
