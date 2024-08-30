import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, isCompleted: false }]);
      setTask('');  // Clear the input field after adding the task
    }
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <div>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
