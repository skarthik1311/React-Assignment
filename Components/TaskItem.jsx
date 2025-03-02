function TaskItem({ task, onToggleComplete, onDelete }) {
    return (
        <div className="flex justify-between items-center p-2 border-b">
            {/* Apply line-through dynamically */}
            <span 
                className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}
            >
                {task.text}
            </span>
            
            <button 
                className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                onClick={() => onToggleComplete(task.id)}
            >
                {task.completed ? "Undo" : "Complete"}
            </button>

            <button 
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default TaskItem;
