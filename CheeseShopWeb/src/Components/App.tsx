import React, { useState, useEffect } from "react";
import './App.css'
import Header from './Header'
import CheeseList from './CheeseList'
import CheeseForm from "./CheeseForm";
import getData from "../Api/getData";


function App() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  async function fetchData() {
    const result = await getData();
    setData(result);
    console.log('fetchData');
  }

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const onCheeseListChanged = () => {
    setRefresh(refresh + 1);
    console.log('onCheeseListChanged');
    console.log(refresh);
  }

  // TODO: Buttons to Add/Edit/Delete Cheeses
  // TODO: Form for editing cheeses
  return (
    <>
      <Header />
      <CheeseList cheeses={data} onCheeseDeleted={onCheeseListChanged} />
      <CheeseForm onCheeseAdded={onCheeseListChanged}/>
    </>
  )
}

export default App
