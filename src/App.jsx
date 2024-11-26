import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./index.css";
import Content from "./Content";

export default function App() {
  const API_USERS = "https://jsonplaceholder.typicode.com/users";
  const API_POSTS = "https://jsonplaceholder.typicode.com/posts";
  const API_COMMENTS = "https://jsonplaceholder.typicode.com/comments";
  const [current, setCurrent] = useState("Users");
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_USERS);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const listUsers = await response.json();
        setList(listUsers);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_POSTS);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const listUsers = await response.json();
        setList(listUsers);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchComments = async () => {
      try {
        const response = await fetch(API_COMMENTS);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const listUsers = await response.json();
        setList(listUsers);
      } catch (err) {
        console.log(err);
      }
    };

    current === "Users"
      ? fetchUsers()
      : current === "Posts"
      ? fetchPosts()
      : fetchComments();
  }, [current]);
  console.log(current, "current");
  return (
    <>
      <NavBar current={current} setCurrent={setCurrent} />
      <Content list={list} />
    </>
  );
}
