import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <div>
      <h1>React + Docker Compose Sample</h1>
      <h2>このシステムのひな形はChatGPTで作成してみました</h2>
      <p>API Message: {message}</p>
    </div>
  )
}

export default App
