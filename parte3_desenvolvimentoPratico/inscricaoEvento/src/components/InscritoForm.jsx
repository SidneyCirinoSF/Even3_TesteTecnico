import { useState } from "react"
import { isValidEmail } from "../utils/validaEmail"

const InscritoForm = ({ addInscrito }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !email) {
            return
        }

        if(!isValidEmail(email)) {
            alert("E-mail inválido!")
            return
        }

        addInscrito(name, email)
        setName("")
        setEmail("")

        console.log("Participante inscrito com sucesso!")
    }

  return <div className="inscrito-form">
    <h1>Fazer inscrição</h1>
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input 
            type="text" 
            placeholder="E-mail: exemplo@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Inscrever</button>
    </form>
  </div>
}

export default InscritoForm