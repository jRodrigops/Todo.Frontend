import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { TaskProps, Tasks } from "./components/tasks";
import { ListEmpty } from "./components/list-empty";

export interface Task{
  id:number 
  text: string
  isChecked: boolean
}

export function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('');
  
  const handleUpdateTask = (updatedTask: TaskProps) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  function handleAddTask(){
    if(!inputValue){
      return 
    }

    const newTask: Task ={
      id:new Date().getTime(),
      text: inputValue,
      isChecked: false
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id:number){
    const filteredTasks = tasks.filter((tasks) => tasks.id !== id)

    if(!confirm('Deseja mesmo apagar esta tarefa')){
      return 
    }

    setTasks(filteredTasks)
  }

  const filteredTasks = tasks.filter((tasks) => tasks.isChecked ==true)
  const taskCompleted = filteredTasks.length

  return (
    <>
      <div className="h-screen justify-center bg-pattern bg-no-repeat bg-center space-y-8">

      <div className="space-y-24">
        <div className="flex items-center justify-center">
          <header className="flex-1 h-52 bg-gray-700 justify-center">
            <div className="flex items-center justify-center mt-16">
            <img src="/logo.svg" alt="logo da aplicação" className="h-15 w-auto"/>

            </div>

          </header>

          <div className="absolute inset-x-0 top-[calc(13rem-28px)]  flex items-center justify-center space-x-2 px-1">
            <div className="h-14 px-2 rounded-lg flex items-center max-w-full bg-gray-500  ">
              <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}  className="bg-gray-500 text-gray-100 Woutline-none w-[638px] h-14 px-4 text-gray-100 outline-none" type="text" placeholder="Adicione uma nova tarefa" />
            </div>

            <div className="h-14 px-4 rounded-lg flex items-center bg-blue-dark space-x-2">
              <button onClick={handleAddTask} className="bg-blue-600 w-8 h-14 text-gray-100">Criar</button>
              <CirclePlus className="text-gray-100 size-5"/>
            </div>
          </div>
        </div>

        <div className=" justify-around flex items-center -space-x-[684px]">
            <div className="space-x-1 flex items-center">
              <span className="text-blue font-bold">Tarefas Criadas</span>
              <span className="rounded-full bg-gray-300 text-gray-200 px-2 font-bold text-sm">{tasks.length}</span>
            </div>
            <div className="space-x-1 flex items-center">
              <span className="text-purple font-bold ">Concluidas</span>
              <span className="rounded-full bg-gray-300 text-gray-200 px-2 font-bold text-sm">{taskCompleted} de {tasks.length}</span>
            </div>
        </div>

        </div>

        <div className="space-y-16">
          <div className="flex items-center justify-center">
            {tasks.length > 0 ? (<Tasks tasks={tasks} onRemoveTask={handleRemoveTask} onChangeTask={handleUpdateTask}/>) : (<ListEmpty />)}
          </div>
        </div>
      </div>
      
    </>
  )
}

