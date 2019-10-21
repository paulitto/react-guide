import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

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
        return () => {
            console.log('[Cockpit.js] cleanup work use effect 1')
        }
    }, [props.personsLength]);

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
            className={btnClass}
            style={style}
            onClick={props.clicked}>Toggle</button>
            <hr/>
        </div>
    );
}

export default React.memo(cockpit);