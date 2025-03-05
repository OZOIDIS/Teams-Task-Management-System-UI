import ProfilePic from "./tools/ProfilePic";

function Task({title}: { title: string}){
    return(
        <>
        <div className="drop-shadow-xl box-border hover:bg-[#f9f9ebb8] bg-[#F9F9EB] rounded-xl m-3">
            <div className="grid grid-cols-2 grid-rows-2 p-2">
                <div className="col-start-2 justify-self-end">
                    <ProfilePic></ProfilePic>
                </div>
                <div className="col-start-1 row-start-1 line-clamp-3">
                    <p>{title}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Task;