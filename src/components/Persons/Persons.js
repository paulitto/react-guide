import React, {PureComponent} from 'react';
import Person from './Person/Person';

export class Persons extends PureComponent {
  
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   // dont update if npersons didnt change
  //   return nextProps.persons !== this.props.persons;
  // }

  getSnapshotBeforeUpdate(prev, next) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');

    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person) => {
      return <Person
      name={person.name}
      age={person.age}
      click={() => this.props.clicked(person.id)}
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)}
    ></Person>
    });
  }
}

export default Persons;