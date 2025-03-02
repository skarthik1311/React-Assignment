import TaskItem from "./TaskItem";

function TaskList(props) {
    const tasks = props.tasks;
    const onToggleComplete = props.onToggleComplete; // Fixed typo
    const onDelete = props.onDelete;  

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem 
                    key={task.id}  // Use task.id, not tasks.id
                    task={task}    // Pass individual task, not tasks
                    onToggleComplete={onToggleComplete}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;
