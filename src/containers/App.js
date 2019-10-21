import React, { useState, Component } from 'react';
import logo from '../logo.svg';
import Persons from '../components/Persons/Persons';
import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import Cockpit from './Cockpit/Cockpit';
import withClass from './hoc/withClass';
import Aux from './hoc/Auxiliary';
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: '1',name: 'Pavlo', age: 34 },
      { id: '2',name: 'Marinka', age: 31},
      { id: '3',name: 'Henry', age: 18}
    ],
    showPersons: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate');
  //   return true;
  // }

  // // gets snapshot of the (user state?)
  // // can be used to get e.g. scrolling postion before component rerenders (and resets scrolling position)
  // getSnapshotBeforeUpdate(prevProps, prevState) {

  // }

  // componentDidUpdate() {

  // }

  // deprecated
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  toggleHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id);
    const persons = [...this.state.persons]
    persons[personIndex] = {
      ...persons[personIndex],
      ...{ name: event.target.value}
    };

    this.setState((prevState, props) => {
      return {
          persons: persons,
          changeCounter: ++prevState.changeCounter
        }
      }
    )
      
  }

  deletePersonHandler = (id) => {
    const persons = [...this.state.persons]
    this.setState({
      persons: persons.filter(x => x.id !== id)
    })
  }

   render() {
    console.log('[App.js] render')
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons =<Persons
      persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.nameChangedHandler}></Persons>
      ;
    }
   

     return (
      <Aux>
        <Cockpit
          clicked={this.toggleHandler}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}></Cockpit>
        {persons}
        
      </Aux>
    )
  };
}

export default withClass(App, classes.App);
