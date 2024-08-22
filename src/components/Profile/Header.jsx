import React, { useState } from "react";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const buttonHandler = ()=>{
    setInputText("");
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
    <h1>Redux flow</h1>
    <h3>{inputText}</h3>
      <input type="text" placeholder="Enter text" value={inputText} onChange={inputTextHandler} />
      <button onClick={buttonHandler}>Click</button>
    </div>
  );
};

export default Header;
