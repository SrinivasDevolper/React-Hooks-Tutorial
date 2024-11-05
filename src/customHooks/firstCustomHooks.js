import React, { useEffect, useState } from "react";
import SecondCustomHooks from "./secondCustomerHooks";
import useCoustom from "./useCoustom";

const url = "https://jsonplaceholder.typicode.com/users";

const FirstCustomHooks = () => {
  const [postData, loading, isError] = useCoustom(url);

  if (loading) {
    return <h3>loading...</h3>;
  }
  if (isError) {
    return <h3>Error Api</h3>;
  }
  return (
    <>
      <div>
        <h1>Users</h1>
        <ul>
          {postData.map((eachUser) => (
            <li key={eachUser.id}>{eachUser.username}</li>
          ))}
        </ul>
      </div>
      <SecondCustomHooks />
    </>
  );
};
export default FirstCustomHooks;
