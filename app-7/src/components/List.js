import React from 'react'

export default function List (props) {

    return(<span>
        <button onClick = {e => props.updateList(e)}>Add Todo</button>
    </span>)
}