import React, { useState } from "react";
import './style.css'
function DoCards() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };
  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  return (
    <div className=" bg-blue w-full p-8 flex justify-center font-sans">
      <div className=" rounded bg-grey-light w-64 p-2">
        <div className="flex justify-between py-1">
          <h3 className="text-sm">To Do App</h3>

        </div>
        <div className="text-sm mt-2">
          {tasklist !== [] ? (
            <div class= " hover:border-green-600 border-2 bg-white p-2 float-left w-48 rounded mt-1 h-40 overflow-y-scroll cursor-pointer ">
              <ul>
                {tasklist.map((t) => (
                  <li className={ t.isCompleted ? "crossText" : "listitem"}>
                    {t.value}
                  </li>
                ))}
              </ul>
            </div>
            
          ) : null}{" "}
          {tasklist !== [] ? (
            <div class="bg-white p-2 rounded mt-1 border-b border-grey h-40 w-12  float-right overflow-y-scroll cursor-pointer hover:bg-grey-lighter">
                {tasklist.map((t) => (
                    <button
                      className=" hover:border-red-800 border-2 block delete m-1 hover:bg-red-700 bg-red-600 pr-1 pl-1"
                      onClick={(e) => deletetask(e, t.id)}
                    >
                      x
                    </button>
                ))}
            </div>
            
          ) : null}{" "}
          <input
            name="addtodo"
            placeholder="Type something"
            onChange={(e) => handleChange(e)}
            className=" hover:border-blue-600 border-2 w-48 placeholder-green-700 border-collapse text-black p-2 mt-3 text-grey-dark"
                  autoComplete='off'
          />
          <button onClick={addTask} className=" hover:bg-green-600 ml-1 w-9 bg-green-500 p-1">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default DoCards;
