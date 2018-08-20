import React from 'react'

export default (props) => {

    return (
        <div>
            <label>{props.label}</label>
            <input style={{marginBottom: '5px'}} {... props.input} />
            <div className="red-text" style={{marginBottom: '20px'}}>
            {props.meta.touched && props.meta.error}

            </div>
        </div>
    )
}