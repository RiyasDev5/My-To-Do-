import React, { useEffect, useRef, useState } from 'react';
import TodoItems from './TodoItems';

function Todo() {
  const [Todolist, SetTodolist] = useState([localStorage.getItem("todos")?JSON.parse:[]]);
  const inputref = useRef();

  //Update LocalStorage
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(Todolist));
  },[Todolist]);

  // ADD new task
  const Addtask = () => {
    const inputext = inputref.current.value.trim();
    if (inputext === '') {
      return;
    }

    const newtodo = {
      id: Date.now(), // ✅ Corrected
      text: inputext,
      isComplete: false,
    };

    SetTodolist((prev) => [...prev, newtodo]);
    inputref.current.value = '';
  };

  // Toggle task status
  const Toggletask = (id) => {
    SetTodolist((prev) => {
      return prev.map((todo) => {
        if (id === todo.id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  // Delete todo
  const deletetodo = (id) => {
    SetTodolist((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <div className="w-full max-w-2xl px-4 mx-auto ">
        <h1 className="text-lg my-2 font-medium text-amber-500">To-Do List</h1>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              ref={inputref}
              type="text"
              className="py-3 px-4 w-full text-sm border focus:outline-none focus:border-amber-500"
              placeholder="Add your task"
            />
          </div>
          <button
            className="bg-blue-600 py-3 px-4 text-white hover:bg-blue-700 text-sm font-medium rounded-sm border-none"
            onClick={Addtask}
          >
            Add Task
          </button>
        </div>
        <p className="my-3 text-sm text-zinc-400 px-1">Fill task details</p>
      </div>

      <div className="w-full max-w-2xl px-4 mx-auto bg-white shadow py-6 ">
        <fieldset className="space-y-3">
          <legend className="text-pink-600 font-medium">List of task</legend>

          {/* ✅ Task Display Logic */}
          {Todolist.length === 0 ? (
            <p className="text-gray-500 text-sm">No Tasks Found</p>
          ) : (
            Todolist.map((todo) => (
              <TodoItems
                text={todo.text}
                key={todo.id}
                isComplete={todo.isComplete}
                id={todo.id}
                Toggletask={Toggletask}
                deletetodo={deletetodo}
              />
            ))
          )}
        </fieldset>
      </div>
    </>
  );
}

export default Todo;
