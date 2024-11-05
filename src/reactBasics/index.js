import React, { useState } from "react";

const userObj = [
  {
    id: "user1",
    name: "Emma",
    age: 15,
    place: "Chittor",
  },
  {
    id: "user2",
    name: "Gama",
    age: 15,
    place: "Aruku",
  },
  {
    id: "user3",
    name: "Dhoma",
    age: 15,
    place: "Neluru",
  },
];

const BasicsUseState = () => {
  const [data, setdata] = useState(userObj);
  const deleteUser = (id) => {
    const filterdUser = data.filter((eachId) => {
      return eachId.id !== id;
    });
    setdata(filterdUser);
  };
  return (
    <div>
      <h1>User details</h1>
      <ul>
        {data.map((eachUser) => {
          const { id, name, age, place } = eachUser;
          return (
            <li key={id}>
              <h1>I Am is {name}</h1>
              <h2>My Age is {age}</h2>
              <h3>My Place is {place}</h3>
              <button onClick={() => deleteUser(id)}>Delete Me</button>
            </li>
          );
        })}
        {data.length === 0 && (
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload
          </button>
        )}
      </ul>
    </div>
  );
};
export default BasicsUseState;
