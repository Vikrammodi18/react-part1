
function Todo(){
    function addTask(e){
        e.preventDefault()
        let[task,addTask] = useState("vikram")

    }
return(
    <>
    <form onSubmit={addTask}>
        <label htmlFor="task">enter your task:</label>
        <input type="text" id="task" />
        <button>add</button>
        <h3>{task}</h3>
    </form>
    <ul>
        {/* <li>{task}</li> */}
    </ul>
    </>
)
}
export default Todo

