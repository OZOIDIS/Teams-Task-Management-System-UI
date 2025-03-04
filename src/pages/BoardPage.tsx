import Nav from "../components/Nav";
import TaskBoard from "../components/TaskBoard";
import Chat from "../components/Chat";

function BoardPage()
{
    return(
        <>
            <div className="flex flex-row justify-between content-around gap-1 ms-4 my-4 border-0 p-4 bg-[#F2F5EA]">    
                <div className="basis-1/6 border-1">
                    <Nav />
                </div>
                <div className="basis-4/6">
                    <TaskBoard></TaskBoard>
                </div>
                <div className="basis-1/6 border-1">
                    <Chat></Chat>
                </div>
            </div>
        </>
    )
}

export default BoardPage;