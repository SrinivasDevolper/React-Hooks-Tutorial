import React from "react";
import userDetails from "./userDetails";
import { Link } from "react-router-dom";

function UserData() {
  return (
    <div>
      <h3>UserData</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {userDetails.map((eachData) => {
          const { id, name, email } = eachData;
          return (
            <Link to={`/users/${id}`} key={id}>
              <article
                style={{
                  backgroundColor: "tomato",
                  padding: "10px",
                }}
              >
                <h3>{name}</h3>
                <h5>{email}</h5>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default UserData;
