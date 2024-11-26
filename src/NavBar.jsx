import React from "react";

export default function NavBar({ handleChange }) {
  return (
    <nav>
      <ul className="navbar_unorderedList">
        <li className="navbar_Lists">
          <button onClick={(e) => handleChange(e)} value="users">
            Users
          </button>
        </li>
        <li>
          <button onClick={(e) => handleChange(e)} value="posts">
            Posts
          </button>
        </li>
        <li>
          <button onClick={(e) => handleChange(e)} value="comments">
            Comments
          </button>
        </li>
      </ul>
    </nav>
  );
}
