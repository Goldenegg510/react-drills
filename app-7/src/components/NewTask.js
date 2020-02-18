import React from 'react'

export default function NewTask (props) {

    return(<span>
        <input value={props.newTask} onChange={e => props.updateNewTask(e)} />
    </span>)
}