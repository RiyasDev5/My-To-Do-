import React from 'react'

const TodoItems = ({text, isComplete, id , Toggletask, deletetodo}) => {
  return (
    <div className="flex justify-between items-center gap-2">
                    <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none ${isComplete ? "line-through text-slate-600" : ""}`} onClick={()=>Toggletask(id)}>{text}</label>
                    <div className="size-[26px]  hover:bg-red-50 rounded-md" onClick={()=>deletetodo(id)}>
                        <svg className="hover:fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </div>

                </div>
  )
}

export default TodoItems