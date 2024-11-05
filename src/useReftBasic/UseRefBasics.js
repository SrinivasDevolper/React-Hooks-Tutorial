import React, { useEffect, useRef, useState } from "react";

// const UseRefBasics = () => {
//   const [typing, setTyping] = useState("");
//   //   const currentObj = useRef(1);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setCount(count + 1);
//   }, [typing]);
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="type..."
//         name="type"
//         id="type"
//         onChange={(e) => {
//           setTyping(e.target.value);
//         }}
//         value={typing}
//       />
//       <h1>Typing: {typing}</h1>
//       <h3>Component Rendiring {count} times</h3>
//     </div>
//   );
// };

const UseRefBasics = () => {
  const [typing, setTyping] = useState("");
  const currentObj = useRef(1);

  useEffect(() => {
    currentObj.current = currentObj.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        placeholder="type..."
        name="type"
        id="type"
        onChange={(e) => {
          setTyping(e.target.value);
        }}
        value={typing}
      />
      <h1>Typing: {typing}</h1>
      <h3>Component Rendiring {currentObj.current} times</h3>
    </div>
  );
};

export default UseRefBasics;
