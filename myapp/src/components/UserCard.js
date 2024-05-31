import React from "react";

function UserCard({name, email, rollNo}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{rollNo}</p>
    </div>
  );
}

export default UserCard;
