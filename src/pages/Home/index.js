import React from 'react';
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { useEffect, useState } from "react";
//1:18:00
//1:32:00講解data setData如何傳遞
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        window.alert("123")
    },[data])
    return (
    <div className="app">
        <Edit add={setData} />
        <List listData={data} deleteData={setData} />
    </div>
    );
};

export default Home;
