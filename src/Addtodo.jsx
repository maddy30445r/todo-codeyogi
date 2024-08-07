import React, { useEffect, useState } from "react";

function Addtodo({ tasks, settasks }) {
  const [show, setshow] = useState(true);
  const [task, settask] = useState("");
  function handlesave() {
    if (task) {
      let newtask = { task: task, checked: false, id: Date.now() };
      settasks([...tasks, newtask]);
      settask("");
      setshow(false);
    }
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      {show ? (
        <div className="font-medium text-xl flex flex-col gap-5 px-8 py-4 text-black border rounded-md shadow-lg">
          Create a Todo
          <input
            value={task}
            onChange={(e) => settask(e.target.value)}
            type="text"
            placeholder="Write an article about XState"
            className=" outline-yellow-300 py-2 px-2 border border-zinc-400 rounded-md w-[25%] bg-transparent text-sm "
          />
          <div className="flex gap-4">
            <button
              onClick={handlesave}
              className="border-none bg-yellow-500 px-4 py-2 rounded-md text-base text-white">
              Save
            </button>
            <button
              onClick={() => setshow(false)}
              className="border border-zinc-300 px-4 py-2 rounded-md  text-sm">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <button
            onClick={() => setshow(true)}
            className="border-none bg-yellow-500 px-2 py-1 rounded-md">
            + Add a todo
          </button>
        </div>
      )}
    </>
  );
}

export default Addtodo;
