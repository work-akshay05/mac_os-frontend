import { useState } from 'react'
import "./app.scss"
import Dock from './components/dock'
import Nav from './components/Nav'
import Terminal from './components/webPages/terminal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav/>
      <Terminal>
        <h1>chalo ye to ho geya</h1>
      </Terminal>
      <Dock/>
    </main>
  )
}

export default App
