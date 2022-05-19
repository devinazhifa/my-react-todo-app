import React from "react";
import InputBox from "./InputBox";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title.toUpperCase()}</h1>
      <InputBox addNewItem={props.addNewItem} />
    </div>
  ) 
};

export default Header;