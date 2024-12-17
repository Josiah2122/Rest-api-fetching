import React from "react";
import TablePreview from "./TablePreview";

export default function Content({ list }) {
  return (
    // <ul className="unorderedList">
    <>
      {list?.map((item, index) => (
        // <li className="list" key={index}>
        //   {JSON.stringify(item)}
        // </li>
        <TablePreview item={item} key={index} />
      ))}
    </>
    // </ul>
  );
}

Content.defaultProps = {
  list: [],
};
