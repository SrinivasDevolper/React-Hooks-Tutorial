import React from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./Auth";

function HomeContent() {
  const navigate = useNavigate();
  return (
    <>
      <div>HomeContent</div>
      <button onClick={() => navigate("/suscribe")}>Get Suscribe</button>
    </>
  );
}
export default HomeContent;
