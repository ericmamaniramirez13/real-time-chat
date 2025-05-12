import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='chat-section'>
      <div className='chat-container'>
        <div className='chat-history'>

        </div>
        <div className='chat-input'>
          <input />
          <button>Send</button>
        </div>
      </div>
    </section>
  )
}

export default App
