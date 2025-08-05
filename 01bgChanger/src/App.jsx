import { useState } from "react"
import { colors } from "./colors"

export default function App() {
  const [background, setBackground] = useState("olive")

  const colorElements = colors.map(col => {
    const styles = {
      backgroundColor: col.backGroundColor,
      color: col.color
    }
    return <button
      className="color-tab"
      style={styles}
      onClick={() => setBackground(col.backGroundColor)}
    >
      {col.name}
    </button>
  })

  return (
    <main style={{backgroundColor: background}}>
      <section className="container">
        {colorElements}
      </section>
    </main>
  )
}