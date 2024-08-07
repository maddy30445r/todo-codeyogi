import React from "react";
import Todo from "./Todo";

function Todos({ tasks, settasks, comptasks, setcomptasks }) {
  return (
    <>
      <div className=" font-medium px-3 mt-5 underline">Things to do</div>
      <ul className=" py-3 px-5">
        {tasks.map((item) => (
          <Todo key={item.id}
            item={item}
            tasks={tasks}
            settasks={settasks}
            comptasks={comptasks}
            setcomptasks={setcomptasks}
          />
        ))}
      </ul>
    </>
  );
}

export default Todos;
