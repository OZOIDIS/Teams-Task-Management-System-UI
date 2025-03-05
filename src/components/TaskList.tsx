import Task from "./Task";

function TaskList({name}: { name: string}){
    return(
        <>
        <div className="text-center text-base font-mono font-medium mt-3.5"> 
            <h1>{name}</h1>
        </div>

        <div className="flex flex-col content-around items-center m-4 gap-2 min-h-screen inset-shadow-xs inset-shadow-[#a8a8a7] bg-[#D0D0D0] rounded-lg">
            <div className="">
                <Task title="Clean Room"></Task>
                <Task title="Take out trash it is urgent... lalalala"></Task>
            </div>
        </div>
        </>
    )
}

export default TaskList;