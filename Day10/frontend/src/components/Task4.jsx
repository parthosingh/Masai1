import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchData = () => {
    axios("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        const data = response.data;
        if (data) {
          const tasksArray = Object.values(data);  // Convert Firebase object to array
          setTasks(tasksArray);
        } else {
          setTasks([]);  // If no data, set empty array
        }
      })
      .catch((error) => console.log("Error fetching tasks:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
