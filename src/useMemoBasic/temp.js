// take a list of urls in input and call all of them async at once
// store the response in the same order

// import { json } from "react-router-dom";

const list_url = [
  { url: "www.google.com" },
  { url: "www.flipkart.com" },
  { url: "www.amazon.com" },
];
const JsonList = JSON.stringfy(list_url);
console.log(JsonList, "JsonList");

// const fun = async () => {
//   const response = await fetch(list_url);
//   const data = await response.json();
// };
