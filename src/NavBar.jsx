import React from "react";

export default function NavBar({ current, setCurrent }) {
  function handleClick(e) {
    e.preventDefault();
    setCurrent(e.target.value);
  }
  //   console.log(current, "current");

  return (
    <nav>
      <form>
        <ul className="navbar_unorderedList">
          <li className="navbar_Lists">
            <button onClick={handleClick} value="users">
              Users
            </button>
          </li>
          <li>
            <button onClick={handleClick} value="posts">
              Posts
            </button>
          </li>
          <li>
            <button onClick={handleClick} value="comments">
              Comments
            </button>
          </li>
        </ul>
      </form>
    </nav>
  );
}
