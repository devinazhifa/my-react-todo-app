import React from "react";
import TodoItem from './TodoItem.js'
import Header from './Header.js'
import Footer from "./Footer.js";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <Header title={props.title} addNewItem={props.addNewItem} />
      <ul className="list-group list-group-flush">
        {props.items.map((item, i) => (
          <TodoItem item={item} key={i} />
        ))}
      </ul>
      <Footer items={props.items} />
    </div>
  );
};

export default TodoList;