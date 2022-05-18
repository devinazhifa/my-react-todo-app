import React from "react";
import TodoItem from './TodoItem.js'
import Header from './Header.js'

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <Header title={props.title} />
      <li className="list-group list-group-flush">
        {props.items.map((item, i) => (
          <TodoItem item={item} key={i} />
        ))}
      </li>
    </div>
  );
};

export default TodoList;