import { useState } from 'react'

export default function RegistrationForm({ onRegister }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !course.trim()) {
      setError('Please fill all fields.')
      return
    }
    const emailRe = /\S+@\S+\.\S+/
    if (!emailRe.test(email)) {
      setError('Enter a valid email address.')
      return
    }

    onRegister({ name: name.trim(), email: email.trim(), course })
    setName('')
    setEmail('')
    setCourse('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, marginBottom: 20 }}>
      <label style={{ display: 'block' }}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          style={{ display: 'block', width: '100%', padding: '6px 8px', marginTop: 6 }}
        />
      </label>

      <label style={{ display: 'block' }}>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          style={{ display: 'block', width: '100%', padding: '6px 8px', marginTop: 6 }}
        />
      </label>

      <label style={{ display: 'block' }}>
        Course
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '6px 8px', marginTop: 6 }}
        >
          <option value="">Select a course</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Biology">Biology</option>
        </select>
      </label>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div>
        <button type="submit" style={{ padding: '8px 12px' }}>
          Register
        </button>
      </div>
    </form>
  )
}
