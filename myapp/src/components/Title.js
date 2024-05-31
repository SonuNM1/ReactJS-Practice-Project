import React from "react";

function Title({ name, collegeName, schoolName, rollNo }) {
  return (
    <>
      <h1 style={{ fontSize: 100, color: "indianred" }}>{name}</h1>
      <h1 style={{ fontSize: 100, color: "indianred" }}>{collegeName}</h1>
      <h1 style={{ fontSize: 100, color: "indianred" }}>{schoolName}</h1>
      <h1 style={{ fontSize: 100, color: "indianred" }}>{rollNo}</h1>
    </>
  );
}

export default Title;
