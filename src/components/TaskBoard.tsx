import TaskList from "./TaskList";

function TaskBoard(){
    return(
        <>
        <div className="border-0 rounded-xl bg-[#F9F9EB] inset-shadow-xs inset-shadow-[#a8a8a7] min-h-1/2">
            <div className="flex flex-row content-stretch gap-5 justify-center justify-items-stretch w-full">
                <div className="min-w-1/4">
                    <TaskList name="To-do"/>
                </div>
                <div className="min-w-1/4">
                    <TaskList name="Doing"/>
                </div>
                <div className="min-w-1/4">
                    <TaskList name="Completed"/>
                </div>
            </div>

        </div>
        </>
    )
}

export default TaskBoard;