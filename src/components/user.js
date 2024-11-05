import React from "react";
import { useParams } from "react-router-dom";
import userDetails from "./userDetails";

function User() {
  const { userId } = useParams();
  const userData = userDetails.find((eachData) => eachData.id == userId);
  console.log(userData, "userData");
  return (
    <div>
      <h1>User</h1>
      <h2>{userData.name}</h2>
      <h3>{userData.email}</h3>
      <h4>{userData.username}</h4>
      <h5>{userData.phone}</h5>
    </div>
  );
}

export default User;
