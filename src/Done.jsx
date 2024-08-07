import React from "react";
import Todo from "./Todo";

function Done({ tasks, settasks, comptasks, setcomptasks }) {
  return (
    <>
      <div className=" font-medium px-3 mt-4 underline">Things done</div>
      <ul className=" py-3 px-5">
        {comptasks.map((item) => (
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

export default Done;
