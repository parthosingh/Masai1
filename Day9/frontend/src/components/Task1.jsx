import React,{useState} from "react";

function TodoList(){
const [tasks, setTasks] = useState([])
const [input, setInput] = useState("")

function addtask(){
if(input.trim() !== ""){
 setTasks([...tasks,{Text:input, completed:false}])
 setInput("")
}
}
function markComplete(index){
 const updatedTasks = [...tasks]
 updatedTasks[index].completed = true
 setTasks(updatedTasks)
}

function DeleteTask(index){
    const deletedTasks = [...tasks]
    const newTask = deletedTasks.filter(function(item,i){
        return i !== (index)
    })
    setTasks(newTask)
}

return(
    <div>
     <input type="text" value={input} onChange={(e)=> {setInput(e.target.value)}}/>
     <button onClick={addtask}>Add Task</button>
     <ul>
        {tasks.map((task,index)=> {
            return <li key={index} style={task.completed ? {textDecoration: "line-through"}:{}}>{` Task:${task.Text}, Completed:${task.completed} `}
             <button onClick={() => {markComplete(index)}}>Complete Button</button>
             <button onClick={() => {DeleteTask(index)}}>Delete</button>
             </li>
        })}
        
     </ul>
    
    </div>
)
}
export default TodoList