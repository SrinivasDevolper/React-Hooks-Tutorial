import React, { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log(state, "state Reducer");
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
      isError: action.payLoad,
    };
  }
  if (action.type === "DELETE_USER") {
    const filteredData = state.userData.filter(
      (eachUser) => eachUser.id !== action.payLoad
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
  if (action.type === "UPDATE_USER") {
    const newUsers = state.userData.map((eachUser) => {
      if (eachUser.id === action.payLoad.id) {
        return {
          id: action.payLoad.id,
          name: action.payLoad.name,
          email: action.payLoad.email,
        };
      } else {
        return eachUser;
      }
    });
    return {
      ...state,
      userData: newUsers,
    };
  }
  return state;
};

const UseReduceFinal = () => {
  const fetchedUserData = async (apiUrl) => {
    dispacth({ type: "LOADING", payLoad: true });
    dispacth({ type: "ERROR", payLoad: { status: false, msg: "" } });
    try {
      const response = await fetch(apiUrl);
      console.log(response, "response list");
      const jsonData = await response.json();
      console.log(jsonData, "apiJson");
      dispacth({
        type: "UPDATED_USER_DATA",
        payLoad: jsonData,
      });
      dispacth({ type: "LOADING", payLoad: false });
      dispacth({ type: "ERROR", payLoad: { status: false, msg: "" } });
    } catch (error) {
      console.log(error);
      dispacth({ type: "LOADING", payLoad: false });
      dispacth({
        type: "ERROR",
        payLoad: { status: true, msg: error.message },
      });
    }
  };

  useEffect(() => {
    fetchedUserData("https://jsonplaceholder.typicode.com/users");
  }, []);
  const initalDataUser = {
    userData: [],
    loading: false,
    isError: { status: false, msg: "" },
    isEdditing: { status: false, id: "", name: "", email: "" },
  };
  const [state, dispacth] = useReducer(reducer, initalDataUser);
  const handleDalete = (id) => {
    dispacth({ type: "DELETE_USER", payLoad: id });
  };
  console.log(state, "state");
  if (state.loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  const updatedData = (id, name, email) => {
    dispacth({
      type: "UPDATE_USER",
      payLoad: {
        id,
        name,
        email,
      },
    });
    dispacth({
      type: "ONCLICK_EDIT",
      payLoad: { status: false, id: "", name: "", email: "" },
    });
  };
  return (
    <div>
      <h1>UserData</h1>
      {state.isEdditing?.status && (
        <EditFromContainer
          id={state.isEdditing.id}
          title={state.isEdditing.name}
          email={state.isEdditing.email}
          updatedData={updatedData}
        />
      )}
      {state.isError.status && (
        <div>
          <h3 style={{ color: "Red" }}>Api Got Error</h3>
        </div>
      )}
      <ul>
        {state.userData.map((eachData) => {
          const { id, name, email } = eachData;
          return (
            <li key={id}>
              <div style={{ backgroundColor: "lightGreen" }}>
                <h1>Name:- {name}</h1>
                <h3>Email:- {email}</h3>
                <button
                  onClick={() => {
                    handleDalete(id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    dispacth({
                      type: "ONCLICK_EDIT",
                      payLoad: { status: true, id: id, name, email },
                    })
                  }
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

const EditFromContainer = ({ id, title, email, updatedData }) => {
  const [Edittitle, setEditTitle] = useState(title || "");
  const [EditEmail, setEditEmail] = useState(email || "");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="text"
          placeholder="Edit the Name"
          id="title"
          value={Edittitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Edit the Email"
          id="Email"
          value={EditEmail}
          onChange={(e) => setEditEmail(e.target.value)}
        />
        <button onClick={() => updatedData(id, Edittitle, EditEmail)}>
          Update Data
        </button>
      </form>
    </>
  );
};

export default UseReduceFinal;
