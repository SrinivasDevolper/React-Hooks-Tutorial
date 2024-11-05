import React from "react";
import { useNavigate } from "react-router-dom";

function GetSuscribe() {
  const navigate = useNavigate();
  return (
    <div>
      <h5>Succussfully Submited</h5>
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
}
export default GetSuscribe;
