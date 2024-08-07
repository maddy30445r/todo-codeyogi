import React, { useState } from "react";
import Nav from "./Nav";
import Todos from "./Todos";
import Addtodo from "./Addtodo";
import Done from "./Done";

function App() {
  const [tasks, settasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [comptasks, setcomptasks] = useState(
    () => JSON.parse(localStorage.getItem("comptasks")) || []
  );
  return (
    <>
      <div className="h-full w-full">
        <Nav />
      </div>
      <div className="px-32 py-10">
        <h1 className="text-3xl font-bold ">Things to get done</h1>

        <Todos
          tasks={tasks}
          settasks={settasks}
          comptasks={comptasks}
          setcomptasks={setcomptasks}
        />
        <Addtodo tasks={tasks} settasks={settasks} />
        <Done
          tasks={tasks}
          settasks={settasks}
          comptasks={comptasks}
          setcomptasks={setcomptasks}
        />
      </div>
    </>
  );
}

export default App;
