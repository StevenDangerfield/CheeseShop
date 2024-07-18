import { useState, useEffect } from "react";
import './App.css'
import Header from './Header'
import CheeseList from './CheeseList'
import CheeseForm from "./CheeseForm";


async function getData() {
  const response = await fetch(`https://localhost:4000/CheeseList`);
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

  // TODO: Buttons to Add/Edit/Delete Cheeses
  // TODO: Form for adding/editing cheeses
  return (
    <>
      <Header />
      <CheeseList cheeses={data} />
      <CheeseForm />
    </>
  )
}

export default App
