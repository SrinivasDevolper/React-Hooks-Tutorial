import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Page NotFound</h2>
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
}
export default NotFound;
