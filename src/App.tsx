import {Circle, CirclePlus, Trash2 } from "lucide-react";
import { useState } from "react";


export interface Task{
  id:number 
  text: string
  isChecked: boolean
}

export function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('');

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

  return (
    <>
      <div className="h-screen justify-center bg-pattern bg-no-repeat bg-center space-y-8">

        <div className="relative">
         <header className="flex-1 h-52 bg-black justify-center">
          <div className="flex items-center justify-center">
           <img src="/logo.svg" alt="logo da aplicação" className="h-15 w-auto"/>

          </div>

          </header>

         
          <div className="absolute inset-x-0 top-[calc(13rem-28px)]  flex items-center justify-center space-x-2 px-1">
            <div className=" h-14  px-4 rounded-xl flex items-center max-w-full bg-gray-800  ">
              <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}  className="bg-gray-800 text-gray-100 outline-none w-[638px] h-14 px-4 text-gray-100" type="text" placeholder="Adicione uma nova tarefa" />
            </div>

            <div className="h-14 px-4 rounded-lg flex items-center bg-blue-600 space-x-2">
              <button onClick={handleAddTask} className="bg-blue-600 w-8 h-14 text-gray-100">Criar</button>
              <CirclePlus className="text-gray-100 size-5"/>
            </div>

        </div>

        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-around -space-x-96 mt-20">
                <h2 className="font-bold text-blue-400">
                  Tarefas Criadas 
                </h2>
                <h2 className="font-bold text-purple-400">
                  Concluidas 
                </h2>
              </div>

            <div className="flex items-center justify-center">
            {/* <div className="w-[771px] h-16 px-4 flex items-center justify-between  bg-gray-700 rounded-lg">
                  <button className="text-blue-600">
                    <Circle />
                  </button>
                  <input className="bg-gray-700 text-gray-100 outline-none " type="text" placeholder="Escreva uma teraf"/>
                  <button className="text-red-700">
                    <Trash2 />
                  </button>

                </div> */}

                <div className="flex flex-col px-5 items-center justify-center space-y-3">
                  <img className="" src="/clipboard.png" alt="ícone de prancheta" />
                  <p className="text-gray-300">
                    <strong>Você ainda não tem tarefas cadastradas </strong> <br /> 
                    Crie tarefas e organize seus itens a fazer
                  </p>
                </div>
            </div>

        </div>
            
      </div>
      
    </>
  )
}

