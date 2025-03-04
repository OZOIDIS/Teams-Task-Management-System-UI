import TaskList from "./TaskList";

function TaskBoard(){
    return(
        <>
        <div className="border-0 rounded-xl bg-[#F9F9EB] inset-shadow-xs inset-shadow-[#a8a8a7]">

{/*             <div className="text-center">
                <h1>TaskBoard</h1>
            </div> */}
            
            {/* I want the task lists in horizontal order = flex-row*/}
            <div className="flex flex-row content-stretch gap-5 justify-center justify-items-stretch">
                <div>
                    <TaskList name="To-do"/>
                </div>
                <div>
                    <TaskList name="Doing"/>
                </div>
                <div>
                    <TaskList name="Completed"/>
                </div>
            </div>

        </div>
        </>
    )
}

export default TaskBoard;