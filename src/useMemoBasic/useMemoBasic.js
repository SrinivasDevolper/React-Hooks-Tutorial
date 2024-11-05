// // useMemo uses is website perfomance speed and prevent slowlyness

// import React, { useEffect, useMemo, useState } from "react";

// const UseMemoBasic = () => {
//   const [inputNumber, setinputNumber] = useState(0);
//   const [status, setStatus] = useState(false);
//   const doubleNumber = useMemo(() => {
//     return slowFunction(inputNumber);
//   }, [inputNumber]);
//   const backgroundColor = useMemo(() => {
//     return {
//       backgroundColor: status ? "black" : "white",
//       color: status ? "white" : "black",
//     };
//   }, [status]);
//   useEffect(() => {
//     console.log(backgroundColor);
//   }, [backgroundColor]);
//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="numbers"
//         value={inputNumber}
//         onChange={(e) => {
//           setinputNumber(Number(e.target.value));
//         }}
//       />
//       <br />
//       <button
//         onClick={() => {
//           setStatus(!status);
//         }}
//       >
//         color Change
//       </button>
//       <h1 style={backgroundColor}>Number: {doubleNumber}</h1>
//     </div>
//   );
// };

// const slowFunction = (number) => {
//   for (let index = 0; index < 1000000000; index++);
//   return number * 2;
// };

// export default UseMemoBasic;
