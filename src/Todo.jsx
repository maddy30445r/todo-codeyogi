import React, { useEffect } from "react";

function Todo({ item, tasks, settasks, comptasks, setcomptasks }) {
  function handleadd() {
    if (!item.checked) {
      setcomptasks([...comptasks, { ...item, checked: true }]);
      settasks(tasks.filter((t) => t.id !== item.id));
    } else {
      settasks([...tasks, { ...item, checked: false }]);
      setcomptasks(comptasks.filter((t) => t.id !== item.id));
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("comptasks", JSON.stringify(comptasks));
   
  }, [tasks, comptasks]);

  return (
    <li className="flex gap-2 space-y-1 items-center">
      <input
        onClick={handleadd}
        defaultChecked={item.checked}
        className=" bg-transparent h-4 w-4   accent-amber-400 border-transparent rounded-lg "
        type="checkbox"
        name=""
        id=""
      />
      <span className=" font-medium">{item.task}</span>
    </li>
  );
}

export default Todo;
