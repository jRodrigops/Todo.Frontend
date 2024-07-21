import { Circle, Trash2 } from "lucide-react";

export interface Task{
    id:number 
    text: string
    isChecked: boolean
}

interface TasksProps {
    tasks: Task[];
    onRemoveTask: (id: number) => void;
}
  

export function Tasks({tasks, onRemoveTask} : TasksProps){

    return(
        <div className="space-y-3">
            {tasks.map((task) => ( 
                <div key={task.id} className="w-[750px] h-16 px-4 flex items-center gap-3 bg-gray-500 rounded-lg ">
                <button className="text-blue">
                 <Circle type="checkbox" />
                </button>

                <span className="bg-gray-500 text-gray-100 outline-none" >
                    {task.text}
                </span>


                <button className="text-gray-300 hover:text-red-500 ml-auto" onClick={() => onRemoveTask(task.id)}>
                <Trash2 className="size-5 "/>
                </button>
            </div> 
            ))}
        </div>
           
    )
}