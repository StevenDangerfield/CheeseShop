import React, { useState, useEffect } from "react";
import './App.css'
import Header from './Header'
import CheeseList from './CheeseList'
import CheeseForm from "./CheeseForm";
import getCheeseList from "../Api/getCheeseList";


function App() {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);

    async function fetchData() {
        const result = await getCheeseList();
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

    // TODO: Buttons to Add/Edit Cheeses
    // TODO: Form for editing cheeses
    return (
        <>
            <Header />
            <CheeseList cheeses={data} onCheeseListChanged={onCheeseListChanged} />
            <CheeseForm onCheeseAdded={onCheeseListChanged} />
        </>
    )
}

export default App
