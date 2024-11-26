import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./index.css";
import Content from "./Content";

export default function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [current, setCurrent] = useState("users");
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + current);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const listUsers = await response.json();
        setList(listUsers);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [current]);

  const handleChange = (e) => {
    e.preventDefault();
    setCurrent(e.target.value);
  };

  return (
    <>
      <NavBar
        current={current}
        setCurrent={setCurrent}
        handleChange={handleChange}
      />
      <Content list={list} />
    </>
  );
}
