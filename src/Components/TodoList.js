import React from "react";
import TodoItem from './TodoItem.js'
import Header from './Header.js'
import Footer from "./Footer.js";
import PaginateList from "./PaginateList.js";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <Header title={props.title} addNewItem={props.addNewItem} />
      <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
      <Footer items={props.items} />
    </div>
  );
};

export default TodoList;