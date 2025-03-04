import Task from "./Task";

function TaskList({name}: { name: string}){
    return(
        <>
        <div className="text-center text-base font-mono font-medium"> 
            <h1>{name}</h1>
        </div>
        
        <div className="flex flex-col content-around m-4 gap-2 inset-shadow-xs inset-shadow-[#a8a8a7] bg-[#D0D0D0] rounded-lg
        min-w-1/6">
            <Task></Task>
            <Task></Task>
        </div>
        </>
    )
}

export default TaskList;