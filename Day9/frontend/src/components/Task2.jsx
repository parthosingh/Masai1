import React ,{ useState } from "react"

function PriorityTask(){
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [priority, setPriority] = useState("High")
    const [filter, setFilter] = useState("All")

      const priorityOrder = {
        High:1,
        Medium:2,
        Low:3
    }

    function addTask(){
        if(input.trim() !== ""){
           setTasks([...tasks, {id:Date.now() ,title: input, priority: priority, completed:false }])
           setInput("")
        }
        
    }

    function handleChange(e){
        setPriority(e.target.value)
    }
  
   const sortedTasks= [...tasks].sort((a,b) => priorityOrder[a.priority]- priorityOrder[b.priority])
   
   function toggleComplete(id){
    //console.log(id)
     const updatedTasks = tasks.map((task) => {
        if(task.id === id){
            return {...task, completed : !task.completed}
        }
        else{
            return task
        }
     })
     setTasks(updatedTasks)
   }

   const filteredTasks = sortedTasks.filter(task => {
  if (filter === "All") return true;
  if (filter === "Completed") return task.completed;
  if (filter === "Incomplete") return !task.completed;
  if (filter === "High") return task.priority === "High";
  if (filter === "Medium") return task.priority === "Medium";
  if (filter === "Low") return task.priority === "Low";
});


    return(
        <>
          <div>
             <input type="text" value={input} onChange={(e)=> {setInput(e.target.value)}}/>
             <select onChange={handleChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
             </select>
             <button onClick={addTask}>AddTask</button>
              <div>
                <button onClick={() => setFilter("All")}>All</button>
                <button onClick={() => setFilter("Completed")}>Completed</button>
                <button onClick={() => setFilter("Incomplete")}>Incomplete</button>
                <button onClick={() => setFilter("High")}>High Priority</button>
                <button onClick={() => setFilter("Medium")}>Medium Priority</button>
                <button onClick={() => setFilter("Low")}>Low Priority</button>

                <ul>
                    {filteredTasks.map((task, index)=> {
                        return <li key={task.id} style={task.priority === "High" ? {color:"red"}:{}}>{`Tile: ${task.title}, Priority:${task.priority}, Completed: ${task.completed}`}
                               <button onClick={()=>{toggleComplete(task.id)}}>Toggle Complete</button>
                        </li>
                    })}
                </ul>
              </div>
          </div>
        </>
    )
}

export default PriorityTask