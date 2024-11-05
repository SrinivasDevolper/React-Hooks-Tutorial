import React, { useState } from "react";

const userObj = [
  {
    firstName: "Emma",
    lastName: "Waston",
    age: "10",
    place: "Guntur",
  },
  {
    firstName: "Om",
    lastName: "Srinivas",
    age: "15",
    place: "Sattenapalli",
  },
];

export const userContext = React.createContext();
export const UserContextData = ({ children }) => {
  return (
    <userContext.Provider value={userObj}>{children}</userContext.Provider>
  );
};
