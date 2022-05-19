import React from 'react'

const Footer = (props) => {
  return (
    <div className="todo-footer">
        <span className="count-todos">{props.items.length} </span>
        {props.items.length > 1 ? "items left " : "item left "}  
    </div>
  )
}

export default Footer