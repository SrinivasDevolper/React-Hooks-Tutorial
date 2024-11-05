import React, { useContext, useState } from "react";
import { userContext } from "../context/userContext";

const UseContextBasics = () => {
  const data = useContext(userContext);
  const [index, setIndex] = useState(0);
  const { firstName, lastName, age, place } = data[index];
  const onClickNext = () => {
    if (index <= 0) {
      setIndex(index + 1);
    }
  };
  const onClickPrevious = () => {
    if (index >= 1) {
      setIndex(index - 1);
    }
  };
  console.log(index, "index");

  return (
    <li>
      <div>
        <h1>firstName:- {firstName}</h1>
        <h1>lastName:- {lastName}</h1>
        <h3>age:- {age}</h3>
        <h4>place:- {place}</h4>
      </div>
      <button onClick={onClickNext}>Next</button>
      <button onClick={onClickPrevious}>Previous</button>
    </li>
  );
};

export default UseContextBasics;
