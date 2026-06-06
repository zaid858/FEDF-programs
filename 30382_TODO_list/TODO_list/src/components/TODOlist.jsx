import { useState } from 'react'

function TODOlist({ tasks, onAddTask, onDeleteTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedText = taskText.trim()
    if (trimmedText === '') {
      return
    }
    onAddTask(trimmedText)
    setTaskText('')
  }

  return (
    <section className="todo-section">
      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="taskInput">Add a new task</label>
        <div className="task-form-row">
          <input
            id="taskInput"
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a task"
            aria-label="Task description"
          />
          <button type="submit" className="add-task-btn">
            Add
          </button>
        </div>
      </form>

      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet. Add one to get started.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className="task-label">{task.text}</span>
              <button
                type="button"
                className="delete-task-btn"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="task-summary">
        Total tasks: <strong>{tasks.length}</strong>
      </div>
    </section>
  )
}

export default TODOlist
