import React, { PureComponent } from 'react';
import Person from './Person/Person'


class Persons extends PureComponent {
	render() {
		return (
			this.props.persons.map((person, index) => {
				return (
					<Person 
				    click={(context) => this.props.clicked(index)}
				    changed={(event) => this.props.changed(event, person.id)}
				    key={person.id}
				    name={person.name}
				    age={person.age}
				    isAuth={this.props.isAuthenticated}
				  />
				);
			})
		)
	}
}

export default Persons;