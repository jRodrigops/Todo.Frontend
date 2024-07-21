export function ListEmpty(){
    return(
        <div className="flex flex-col px-5 items-center justify-center space-y-3">
            <img className="" src="/clipboard.png" alt="ícone de prancheta" />
            <p className="text-gray-300">
            <strong>Você ainda não tem tarefas cadastradas </strong> <br /> 
            Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    );
}