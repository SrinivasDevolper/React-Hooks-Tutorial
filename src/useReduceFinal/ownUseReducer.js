import React, { act, useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "UPDATED_USER_DATA") {
    return {
      ...state,
      userData: action.payLoad,
    };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: action.payLoad,
    };
  }
  if (action.type === "ERROR") {
    return {
      ...state,
      error: action.payLoad,
    };
  }
  if (action.type === "USER_DELETE") {
    const filteredData = state.userData.filter(
      (eachItem) => eachItem.id !== action.payLoad
    );
    return {
      ...state,
      userData: filteredData,
    };
  }
  if (action.type === "ONCLICK_EDIT") {
    return {
      ...state,
      isEdditing: action.payLoad,
    };
  }
  if (action.type === "UPDATED_NEW_DATA") {
    const newDataUser = state.userData.map((eachItem) => {
      if (eachItem.id === action.payLoad.id) {
        return {
          ...state,
          id: action.payLoad.id,
          name: action.payLoad.name,
          email: action.payLoad.email,
          status: false,
        };
      } else {
        return eachItem;
      }
    });
    return {
      ...state,
      userData: newDataUser,
    };
  }
  return state;
};

const OwnUseReducer = () => {
  const getFecthedData = async (apiUrl) => {
    dispacth({ type: "LOADING", payLoad: true });
    dispacth({ type: "ERROR", payLoad: { status: false, msg: "" } });
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      console.log(jsonData, "jsonData");
      dispacth({
        type: "UPDATED_USER_DATA",
        payLoad: jsonData,
      });
      dispacth({ type: "LOADING", payLoad: false });
      dispacth({ type: "ERROR", payLoad: { status: false, msg: "" } });
    } catch (error) {
      dispacth({ type: "LOADING", payLoad: false });
      dispacth({
        type: "ERROR",
        payLoad: { status: true, msg: "USER API GOT ERROR" },
      });
    }
  };
  useEffect(() => {
    getFecthedData("https://jsonplaceholder.typicode.com/users");
  }, []);
  const initalDataUser = {
    userData: [],
    loading: false,
    isEdditing: { status: false, id: "", name: "", email: "" },
    error: { status: false, msg: "" },
  };
  const [state, dispacth] = useReducer(reducer, initalDataUser);
  console.log(state, "Edit Option");
  if (state.loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  const onClickEdit = (id, name, email, status) => {
    dispacth({
      type: "ONCLICK_EDIT",
      payLoad: { status, id, name, email },
    });
  };
  const updatedNewData = (id, editName, editEmail, status) => {
    dispacth({
      type: "UPDATED_NEW_DATA",
      payLoad: { id, name: editName, email: editEmail, status },
    });
    dispacth({
      type: "ONCLICK_EDIT",
      payLoad: { status: false, id: "", name: "", email: "" },
    });
  };
  console.log(
    state.isEdditing.id,
    state.isEdditing.name,
    state.isEdditing.email,
    state.isEdditing.status,
    "I want to Know this"
  );
  return (
    <div>
      <h1>This is User Data</h1>
      {state.isEdditing.status && (
        <CreateInputForm
          id={state.isEdditing.id}
          name={state.isEdditing.name}
          email={state.isEdditing.email}
          status={state.isEdditing.status}
          updatedNewData={updatedNewData}
        />
      )}
      {state.error.status && (
        <h1 style={{ color: "Red" }}>{state.error.msg}</h1>
      )}
      <ul>
        {state.userData.map((eachData) => {
          const { id, name, email } = eachData;
          return (
            <li key={id}>
              <div>
                <h1>{name}</h1>
                <h2>{email}</h2>
                <button
                  onClick={() => {
                    dispacth({
                      type: "USER_DELETE",
                      payLoad: id,
                    });
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    onClickEdit(id, name, email, true);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CreateInputForm = ({ id, name, email, status, updatedNewData }) => {
  console.log(id, name, email, status, "INPUT FORM");
  const [editName, setEditName] = useState(name || "");
  const [editEmail, setEditEmail] = useState(email || "");
  const onChangeName = (e) => {
    setEditName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEditEmail(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Edit The Name"
          id="name"
          value={editName}
          onChange={onChangeName}
        />
        <input
          type="email"
          name="email"
          placeholder="Edit The Email"
          id="email"
          value={editEmail}
          onChange={onChangeEmail}
        />
        <button onClick={() => updatedNewData(id, editName, editEmail, status)}>
          UpdatedData
        </button>
      </form>
    </div>
  );
};

export default OwnUseReducer;
