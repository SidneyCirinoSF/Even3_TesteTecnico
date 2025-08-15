import { useState } from 'react'
import Inscrito from './components/Inscrito'
import './App.css'
import InscritoForm from './components/InscritoForm'
import Search from './components/Search'

function App() {
  const [inscritos, setInscritos] = useState([
    {
      id: 1,
      name: "Sidney Cirino",
      email: "sidneycirinosf@gmail.com"
    }
  ])

  const [search, setSearch] = useState("")

  const addInscrito = (name, email) => {
    const newInscritos = [
      ...inscritos, 
      {
        id: Math.floor(Math.random() * 100000),
        name,
        email
      }
    ]

    setInscritos(newInscritos)
  }

  const removeInscrito = (id) => {
    const newInscritos = [...inscritos]
    const filteredInscritos = newInscritos.filter(inscrito => {
      if(inscrito.id !== id) {
        return inscrito
      } else {
        return null
      }
    })

    setInscritos(filteredInscritos)
  }

  return <div className="app">
    <InscritoForm addInscrito={addInscrito} />
    <h1>Lista de inscritos</h1>
    <div className="subscribed-list">
      <Search search={search} setSearch={setSearch}/>
      {inscritos
      .filter((inscrito) => 
        inscrito.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => 
        a.name.localeCompare(b.name)
      )
      .map((inscrito) => (
        <Inscrito key={inscrito.id} inscrito={inscrito} removeInscrito={removeInscrito}/>
      ))}
    </div>
  </div>
}

export default App
