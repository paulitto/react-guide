import React, {Component} from 'react'
import classes from './Person.css';
import Aux from '../../../containers/hoc/Auxiliary';
import withClass from '../../../containers/hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    inputElementRef = React.createRef();
    // constructor(props) {
    //     super(props);
    //     this.inputElementRef = React.createRef();
    // }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();

        console.log('context:', this.context);
    };

    render() {

        console.log('[Person.js] rendering...');
        return (
            <Aux>
            <AuthContext.Consumer>
                {(context) => context.authenticated ? 'Authenticated': 'Please log in'}
            </AuthContext.Consumer>

            <p onClick={this.props.click}>I'm {this.props.name},
            and I am {this.props.age} years old!</p>
            <input
                // ref={(el) => {this.inputElement = el}}
                ref={this.inputElementRef}
                onChange={this.props.changed} value={this.props.name}></input>
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