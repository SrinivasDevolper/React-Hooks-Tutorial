import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    const filteredData = state.data.filter((eachObj) => {
      return eachObj.id !== action.payload;
    });
    return {
      ...state,
      data: filteredData,
      length: state.length - 1,
    };
  }
  return state;
  // throw new Error("action not found");
};

const UseReduceBasics = () => {
  const initalState = {
    data: [
      {
        id: "1",
        name: "srinivas",
        email: "srinivas@email.com",
      },
      {
        id: "2",
        name: "om",
        email: "om@email.com",
      },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, initalState);
  const onClickDeleteBtn = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };
  const onClickEditBtn = (id) => {
    dispatch({
      type: "UPDATE_PERSON",
      payload: id,
    });
  };
  return (
    <div>
      <h1>Data Length:- {state.length}</h1>
      <div>
        {state.data.map((eachObj) => {
          const { id, name, email } = eachObj;
          return (
            <div key={id}>
              <h1>Name:- {name}</h1>
              <h1>Email:- {email}</h1>
              <button onClick={() => onClickDeleteBtn(id)}>Delete</button>
              <button onClick={() => onClickEditBtn(id)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseReduceBasics;
