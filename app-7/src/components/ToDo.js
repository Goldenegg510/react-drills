import React from 'react'

export default function ToDo (props) {

    return(<div>
        {props.list.map(item => {
            return(
            <h2>{item}</h2>
            )
        })}
    </div>)
}