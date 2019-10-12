import React, { useState, Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';
import classes from './App.css';

console.log(classes);
class App extends Component {

  state = {
    persons: [
      { id: '1',name: 'Pavlo', age: 34 },
      { id: '2',name: 'Marinka', age: 31},
      { id: '3',name: 'Henry', age: 18}
    ],
    showPersons: true
  };

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
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (id) => {
    const persons = [...this.state.persons]
    this.setState({
      persons: persons.filter(x => x.id !== id)
    })
  }

   render() {
    let persons = null;

    const style ={
      backgroundColor: 'darkgreen',
      padding: '5px 10px',
      borderRadius: '15px',
      cursor: 'pointer',
      color: 'white',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    if (this.state.showPersons) {
      persons = (<div>
      {
        this.state.persons.map((person) => {
            return <Person
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(person.id)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          ></Person>
        })
      }
      </div>);

      style.backgroundColor = 'coral';
    }
   

     return (
      <StyleRoot>
      <div className='App'>
        <h1>Hi I'm react app</h1>
        <button 
        style={style}
        onClick={this.toggleHandler}>Toggle</button>
        <hr/>
        {persons}
        
      </div>
      </StyleRoot>
    )
  };
}

export default Radium(App);
