import { Check, Circle, CircleCheck, Trash2 } from "lucide-react";
import { Task } from "../App";

export interface TaskProps{
    id:number 
    text: string
    isChecked: boolean
}


interface TasksProps {
    tasks: TaskProps[];
    onRemoveTask: (id: number) => void;
    onChangeTask: (updateTask : TaskProps) => void
}


  
export function Tasks({tasks, onRemoveTask, onChangeTask} : TasksProps){
    

    return(
        <div className="space-y-3">
            {tasks.map((task) => ( 
                <div key={task.id} className="w-[750px] h-16 px-4 flex items-center gap-3 bg-gray-500 rounded-lg ">

                <button onClick={() => onChangeTask({...task, isChecked: !task.isChecked})} className="text-blue">
                    {task.isChecked ? <Check className="text-gray-100  rounded-full bg-purple-dark "/> 
                    
                    : <Circle className="text-blue"/>}
                </button>

                <span className="bg-gray-500 text-gray-100 outline-none " >
                    {task.text }
                </span>

                <button className="text-gray-300 hover:text-red-500 ml-auto" onClick={() => onRemoveTask(task.id)}>
                <Trash2 className="size-5 "/>
                </button>
            </div> 
            ))}
        </div>
           
    )
}