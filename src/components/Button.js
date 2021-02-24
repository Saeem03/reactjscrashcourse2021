import React from 'react';
import PropTypes from 'prop-types'
const Button = (props)=>{
    return(
        <button
        onClick={props.onClick}
        style={{background: props.color}}
        className='btn'>
            {props.title}
        </button>
        )
}

Button.defaultProps = {
    color: "steelblue",
}
Button.propTypes ={
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
