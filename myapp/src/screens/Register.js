import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const expensiveCalculation = (num) => {
  console.log("Calculating...");

  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
}

function Register() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(()=> expensiveCalculation(count),[count]); 

  // Memoization -> stores in cache 

  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodo = () => {
    setTodos((t) => [...t, "Todo Task"]);
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <Link to="/user-list">Take me to User-List</Link>
    </div>
  );
}

export default Register;
