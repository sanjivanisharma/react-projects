import Header from "./components/Header"
import Entry from "./components/Entry"

import data from "./data"

export default function App() {

  const journalEntries = data.map((entry) => {
    return <Entry
      key={entry.id}
      {...entry}
    />
  })
  
  return (
    <>
      <Header />
      <main className="container">
        {journalEntries}
      </main>
    </>
  )
}