import React from "react";

export default function Content({ list }) {
  return (
    <ul>
      {list?.map((item, index) => (
        <li key={index}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
}

Content.defaultProps = {
  list: [],
};
