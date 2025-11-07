
import List from "./List";
import TaskAddForm from "./TaskAddForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';




const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    
    // Просто используем setTasks чтобы ESLint не ругался
    console.log(setTasks);
    
    const addTask = (text) => {
        setTasks([
            {
                id:uuidv4(),
                text
            },
            ...tasks
        ])
    }
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        

        <div>
            <img src="./src/assets/icon.png" /> 
            <TaskAddForm addTask = {addTask} />
            <List list={tasks} removeTask = {removeTask}  />
        </div>
    );
};

export default TaskManager