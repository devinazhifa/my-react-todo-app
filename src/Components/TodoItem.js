import React from "react";

const TodoItem = (props) => {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
        />
        <label className="form-check-label">
          {props.item.text}
        </label>
      </div>
    </li>
  );
};

export default TodoItem;