import React, { useState, useCallback } from "react";

const Title = () => {
  console.log("Title Renderend");
  return <h1>useCallback & React.memo</h1>;
};

// Correcting NumberFunction to be a React component
const NumberFunction = React.memo(({ text, number }) => {
  console.log(`${text} is rendred`);
  return (
    <h3>
      {text}: {number}
    </h3>
  );
});

const Button = ({ children, clickHandler }) => {
  return <button onClick={clickHandler}>{children}</button>;
};

const ParentComponent = () => {
  console.log("This is parent component");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(7000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      {/* Rendering NumberFunction as a component */}
      <NumberFunction text="Age" number={age} />
      <Button clickHandler={incrementAge}>increamentAge</Button>
      <NumberFunction text="Salary" number={salary} />
      <Button clickHandler={incrementSalary}>increamentSalary</Button>
    </div>
  );
};

export default ParentComponent;

// import React, { useState, useCallback } from "react";

// const Title = () => {
//   console.log("Title is rendred");
//   return <h1>useCallback & React.memo Example</h1>;
// };

// // Memoize NumberFunction to prevent unnecessary re-renders
// const NumberFunction = React.memo(({ text, number }) => {
//   console.log(`Rendering ${text}`);
//   return (
//     <h3>
//       {text}: {number}
//     </h3>
//   );
// });

// const ParentComponent = () => {
//   console.log("Parentcomp is rendered");
//   const [age, setAge] = useState(0);
//   const [salary, setSalary] = useState(7000);

//   // useCallback to memoize incrementAge function
//   const incrementAge = useCallback(() => {
//     setAge(age + 1);
//   }, [age]);

//   // useCallback to memoize incrementSalary function
//   const incrementSalary = useCallback(() => {
//     setSalary(salary + 1000);
//   }, [salary]);

//   return (
//     <div>
//       <Title />
//       <NumberFunction text="Age" number={age} />
//       <NumberFunction text="Salary" number={salary} />
//       <button onClick={incrementAge}>Increase Age</button>
//       <button onClick={incrementSalary}>Increase Salary</button>
//     </div>
//   );
// };

// export default ParentComponent;
