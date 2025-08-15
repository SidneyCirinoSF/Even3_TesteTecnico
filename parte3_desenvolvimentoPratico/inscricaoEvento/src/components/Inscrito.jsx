import React from 'react'

const Inscrito = ({ inscrito, removeInscrito }) => {
  return (
    <div className="inscrito">
          <div className="content">
            <p>{inscrito.name}</p>
            <p>{inscrito.email}</p>
          </div>
          <div>
            <button onClick={() => removeInscrito(inscrito.id)} >REMOVER</button>
          </div>
        </div>
  )
}

export default Inscrito