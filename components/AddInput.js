import { useState } from "react";
import styles from "../styles/AddInput.module.css";
// import "./AddInput.css";
// import { v4 } from "uuid";
// import TodoList from "./TodoList";

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    let updatedTodos = [];
    //   ...todos,
    //   {
    //     id: v4(),
    //     task: todo,
    //     completed: false,
    //   },
    // ];

    setTodos([
      {
        id: `${todo}${Math.random()}`,
        task: todo,
        completed: false,
      },
      ...todos,
    ]);
    setTodo("");
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className={styles.addBtn} onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddInput;
