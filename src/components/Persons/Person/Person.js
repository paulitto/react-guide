import React, {Component} from 'react'
import classes from './Person.css';
import Aux from '../../../containers/hoc/Auxiliary';
import withClass from '../../../containers/hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
            <p onClick={this.props.click}>I'm {this.props.name},
            and I am {this.props.age} years old!</p>
            <input onChange={this.props.changed} value={this.props.name}></input>
            <p>content</p>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string
};

// const person = (props) => {
//     console.log('[Person.js] rendering...');
//     return (
//         <div className={classes.Person}>
//         <p onClick={props.click}>I'm {props.name},
//         and I am {props.age} years old!</p>
//         <input onChange={props.changed} value={props.name}></input>
//         </div>
//     )
// }

export default withClass(Person, classes.Person);