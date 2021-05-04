import React from 'react';
import classes from '../../App.module.css'

const Cockpit = (props) => {
    return (
        <div className = {classes.App}>
            <h1>Component App</h1>
                <button onClick={props.toggle}>Toggle</button>
                <p className={classes.red}>app comp</p>

                {/* if classes arrry length >=2, use {classes.join*(' ')}  because the classname shouold be a string */}

        </div>
    );
}

export default Cockpit;
