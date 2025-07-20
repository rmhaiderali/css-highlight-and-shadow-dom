import root from "react-shadow"
import { useState } from "react"

function App() {
  const [selection] = useState(() => window.getSelection())

  function select(node) {
    if (!node) return
    const range = document.createRange()
    range.selectNodeContents(node)
    // selection.removeAllRanges()
    selection.addRange(range)
  }

  return (
    <div ref={select} style={{ display: "flex", gap: "1rem" }}>
      <div>
        <p>Expected:</p>
        <p>I am not in shadow dom</p>
        <p className="dont">I am in shadow dom</p>
      </div>
      <div>
        <p>Current:</p>
        <p>I am not in shadow dom</p>
        <root.div>
          <p ref={select}>I am in shadow dom</p>
        </root.div>
      </div>
    </div>
  )
}

export default App
