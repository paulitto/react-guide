import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log('Auth Context:', authContext);
    // componentdidmount+ component did update
    // useEffect(() => {
    //     console.log('[Cockpit.js] use effect');
    //     setTimeout(() => {
    //         alert('Saved!');
    //     }, 1000);


    //     return () => {
    //         console.log('[Cockpit.js] cleanup work')
    //     }
    // }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] use effect 1');

        // toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work use effect 1')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] use effect 2');
        return () => {
            console.log('[Cockpit.js] cleanup work use effect 2')
        }
    }, [props.personsLength]);

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    const style ={
        padding: '5px 10px',
        borderRadius: '15px',
        cursor: 'pointer',
        color: 'white'
      }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi I'm react app</h1>
            <button 
            ref={toggleBtnRef}
            className={btnClass}
            style={style}
            onClick={props.clicked}>Toggle</button>
                <button onClick={authContext.login}>Login</button>
            <hr/>
        </div>
    );
}

export default React.memo(cockpit);