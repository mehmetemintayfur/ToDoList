import React, { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import uuid from 'react-uuid';

function Container({ toDos, setToDos }) {

const Delete = e => {
  setToDos(toDos.filter((todo) => parseInt(todo.id) !== parseInt(e)));
}

useEffect(() => {
  console.log(toDos);
  localStorage.setItem("key", JSON.stringify([...toDos]))
}, [toDos])

 
  return (
    <div>
      {toDos.map((item, i) => (
        <div key={i} className='toDos'>
          <li key={item.id} >
            {item.name}
            <FaTrash onClick={() => Delete(item.id)} />
          </li>
        </div>
      ))}
    </div>
  )
}

export default Container;