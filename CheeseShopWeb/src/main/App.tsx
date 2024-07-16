import React from 'react'
import './App.css'
import Header from './Header'
import CheeseList from './CheeseList'
import cheese from './cheese'

// TODO: replace with call to api to get list
const cheeses: cheese[] = [
  {id: 1, name: "Cheddar"},
  {id: 2, name: "Brie"},
  {id: 3, name: "Mozzarella"},
  {id: 4, name: "Parmesan"},
  {id: 5, name: "Camembert"}
];

function App() {
  return (
    <>
      <Header/>
      <CheeseList cheeses={cheeses}/>
    </>
  )
}

export default App
