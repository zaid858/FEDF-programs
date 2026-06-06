import { useState } from 'react'
import TODOlist from './components/TODOlist.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    if (!text.trim()) {
      return
    }
    setTasks((current) => [...current, { id: Date.now(), text: text.trim() }])
  }

  const deleteTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return (
    <div className="app-container">
      <div className="app-card">
        <header className="app-header">
          <h1>To-Do List</h1>
          <p>Use the form below to add tasks, view them, and delete completed items.</p>
        </header>
        <TODOlist tasks={tasks} onAddTask={addTask} onDeleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App
