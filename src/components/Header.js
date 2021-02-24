import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';
const Header = (props) =>{
   
    return (
    <header className="header">
    <h1>{props.title}</h1>
    <Button title={props.showAddTask ? 'Close' : 'Add'} color={props.showAddTask? 'red' : 'green'} onClick={props.onAdd}/>
    </header>
    )

}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title : PropTypes.string,
}
export default Header
