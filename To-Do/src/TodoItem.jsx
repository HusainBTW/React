import React from 'react'

function TodoItem({task , index , completeTask , removeTask }) {
  return (
    <div>
        <span style={{textDecoration: task.isCompleted ? 'line-through' : '' }}>
            {task.text}    
        </span>  
        <button onClick={() => completeTask(index)}>Complete</button>  
        <button onClick={() => removeTask(index)}>Delete</button>  
    </div>
  );
}
export default TodoItem;