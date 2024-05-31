import React from "react";
import UserCard from "../components/UserCard";
import data from "../utils/data";

function UserList() {

  // { -> return statement
  // ( -> return statement not necessary

  return (
    <div>
      {data.map(({ name, email, rollNo }) => {
        return (
          <UserCard name={name} email={email} rollNo={rollNo}/>
        );
      })}
    </div>
  );
}

export default UserList;
