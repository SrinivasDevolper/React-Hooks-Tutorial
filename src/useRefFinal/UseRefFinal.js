// useRef is used to component rendering and Dom Manipulation;
import React, { useRef, useState } from "react";

const UseRefFinal = () => {
  const [value, setValue] = useState("");
  const inputDom = useRef("");
  const OnclickFoucs = () => {
    inputDom.current.focus();
    inputDom.current.placeholder = "Type Something...";
  };
  return (
    <div>
      <input
        ref={inputDom}
        type="text"
        id="name"
        placeholder="type"
        name="name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <h2>Input Value:- {value}</h2>
      <button onClick={OnclickFoucs}>Foucs</button>
    </div>
  );
};

export default UseRefFinal;
