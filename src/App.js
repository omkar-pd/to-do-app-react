import React from "react";
import { TaskProvider } from "./Context/TaskContext";
import AddTask from "./Components/AddTask";
import Header from "./Components/UI/Header";
import Lists from "./Components/List/Lists";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header></Header>
        <AddTask></AddTask>
        <Lists></Lists>
      </div>
    </TaskProvider>
  );
}

export default App;
