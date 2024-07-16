import React, { useState, useEffect } from "react";
import './App.css'
import Header from './Header'
import CheeseList from './CheeseList'
import cheese from './cheese'


async function getData() {
  const response = await fetch(`https://localhost:4000/cheeses`);
  const data = await response.json();

  console.log(data);

  return data;
}

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await getData();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header/>
      <CheeseList cheeses={data}/>
    </>
  )
}

export default App
