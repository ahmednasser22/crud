import React from 'react';
import './addname.css';
const addName = (props) => {
    return (
        <form onSubmit = {props.addName} className = "addname">
            <input type = "text" name = "input" value = {props.current} onChange = {props.updateName} placeholder = " Type here .."/>
            <button type = "submit">add name</button>
        </form>
    );
}
export default addName;