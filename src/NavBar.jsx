import React from "react";

export default function NavBar({ handleChange }) {
  return (
    <nav>
      <ul className="navbar_unorderedList">
        <li className="navbar_Lists">
          <button onClick={(e) => handleChange(e)} value="Users">
            Users
          </button>
        </li>
        <li>
          <button onClick={(e) => handleChange(e)} value="Posts">
            Posts
          </button>
        </li>
        <li>
          <button onClick={(e) => handleChange(e)} value="Comments">
            Comments
          </button>
        </li>
      </ul>
    </nav>
  );
}
