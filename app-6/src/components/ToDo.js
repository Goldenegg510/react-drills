import React from 'react'

export default function ToDo (props){
    let h2List = props.list.map((element) => {
   return( <h2>{element}</h2>)
})
    return (<div>
        {h2List}
    </div>)
}