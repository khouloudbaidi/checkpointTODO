import React, { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import FilterTasks from "./Components/FilterTasks/FilterTasks";
import ListTasks from "./Components/ListTasks/ListTasks";

function App() {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  return (
    <div className="App">
      <h2> Todo App </h2>
      <AddTask />
      <FilterTasks
        setFilteredTasks={setFilteredTasks}
        setFilterStatus={setFilterStatus}
      />
      <ListTasks filteredTasks={filteredTasks} filterStatus={filterStatus} />
    </div>
  );
}

export default App;
