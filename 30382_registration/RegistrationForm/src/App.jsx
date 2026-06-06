import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [students, setStudents] = useState([])

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student])
  }

  return (
    <div style={{ maxWidth: 820, margin: '40px auto', padding: 20 }}>
      <h1>Student Registration System</h1>
      <RegistrationForm onRegister={addStudent} />

      <h2>Registered Students</h2>
      <ul>
        {students.length === 0 ? (
          <li>No registrations yet.</li>
        ) : (
          students.map((s, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <strong>{s.name}</strong> — {s.email} — {s.course}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default App
