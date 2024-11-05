import React, { useEffect, useState } from "react";
import useCoustom from "./useCoustom";

const url = "https://jsonplaceholder.typicode.com/posts";

const SecondCustomHooks = () => {
  const [postData, loading, isError] = useCoustom(url);
  if (loading) {
    return <h3>loading...</h3>;
  }
  if (isError) {
    return <h3>Error Api</h3>;
  }
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {postData.map((eachUser) => (
          <li key={eachUser.id}>{eachUser.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default SecondCustomHooks;
