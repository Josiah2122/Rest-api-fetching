import React from "react";

export default function TablePreview({ item }) {
  console.log(item);
  return (
    <table>
      <tr>
        <td>{JSON.stringify(item?.id)}</td>
        <td>{JSON.stringify(item?.name)}</td>
        <td>{JSON.stringify(item?.username)}</td>
        <td>{JSON.stringify(item?.email)}</td>
        <td>{JSON.stringify(item?.address)}</td>
        <td>{JSON.stringify(item?.phone)}</td>
        <td>{JSON.stringify(item?.website)}</td>
        <td>{JSON.stringify(item?.company)}</td>
      </tr>
    </table>
  );
}
