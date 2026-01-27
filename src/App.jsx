import { useState } from 'react'
import "./app.scss"
import Dock from './components/dock'
import Nav from './components/Nav'
import Terminal from './components/webPages/terminal'
import Github from './components/webPages/github'
import PdfView from './components/webPages/pdf'
import Spotify from './components/webPages/spotify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav/>
      <Github/>
      <PdfView/>
      <Spotify/>
      <Dock/>
    </main>
  )
}

export default App
