import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        isHeld: false,
        value: Math.ceil(Math.random() * 6),
        id: nanoid()
      }))
  }

  function rollDice() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />
  ))

  return (
    <main className="game-board">
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}