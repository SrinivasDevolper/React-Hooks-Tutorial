import React, { useState, useEffect } from "react";
import "./index.css";

const drinksApi = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

const UseEffectBasics = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState({ status: false, errorMsg: "" });
  const fecthedDrinksData = async (drinksApi) => {
    setLoading(true);
    try {
      const response = await fetch(drinksApi);
      const { drinks } = await response.json();
      if (!drinks) {
        throw new Error("data not found");
      }
      setLoading(false);
      setDrinksData(drinks);
      setError({ status: false, errorMsg: "" });
    } catch (error) {
      setLoading(false);
      setError({
        status: true,
        errorMsg: error.message || "something has got error...",
      });
    }
  };
  useEffect(() => {
    const searchedApi = `${drinksApi}${searchTerm}`;
    fecthedDrinksData(searchedApi);
  }, [searchTerm]);
  const onSubmitInput = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmitInput}>
        <input
          type="search"
          name="search"
          placeholder="what do you want.."
          id="search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
      </form>
      <hr />
      <h1>Drinks Count {drinksData.length}</h1>
      {loading && !isError?.status && <h1>Dinks Data is Loading...</h1>}
      {isError?.status && <h1 style={{ color: "red" }}>{isError.errorMsg}</h1>}
      {!loading && !isError?.status && (
        <ul className="drinks-ul">
          {drinksData.map((eachDrink) => {
            const { idDrink, strDrink, strDrinkThumb } = eachDrink;
            return (
              <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink} />
                  <h1>{strDrink}</h1>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

//window.innerwidth

// const URL = "https://jsonplaceholder.typicode.com/user";

// const UseEffectBasics = () => {
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState({
//     status: false,
//     errorMsg: "",
//   });
//   const userFecthedData = async (apiUrl) => {
//     setLoading(true);
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setUserData(data);
//       setLoading(false);
//       setError({ status: false, errorMsg: "" });
//       if (response.status === 404) {
//         throw new Error("Data Not Found");
//       }
//     } catch (error) {
//       setLoading(false);
//       setError({
//         status: true,
//         errorMsg: error.message || "something went wrong, pls try again",
//       });
//     }
//   };
//   useEffect(() => {
//     userFecthedData(URL);
//   }, []);
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
//   if (error?.status) {
//     return <h2 style={{ color: "red" }}>{error?.errorMsg}</h2>;
//   }
//   return (
//     <div>
//       <h1>This is UserData</h1>
//       <ul>
//         {userData.map((eachData) => {
//           const {
//             id,
//             name,
//             username,
//             email,
//             address,
//             phone,
//             website,
//             company,
//           } = eachData;
//           console.log(website);
//           return (
//             <li key={id}>
//               <h1>{username}</h1>
//               <h2>{name}</h2>
//               <h4>{email}</h4>
//               <a href={website} target="_blank">
//                 Website Link
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

export default UseEffectBasics;
