import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <div className="subContainer">
        
      <div className="box">
        <h1>To-do List</h1>
      </div>

      <div className="inputs">
        <input
          type="text"
          placeholder="Add something to do.."
          value={newTask}
          onChange={handleInputChange}
          className="inputText"
        />
        <button className="addBtn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delBtn" onClick={() => deleteTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
