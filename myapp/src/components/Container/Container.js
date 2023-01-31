import React, { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import uuid from 'react-uuid';
import "./Container.css"
import {ImCheckmark,ImCheckboxUnchecked} from 'react-icons/im'

function Container({ toDos, setToDos }) {

const Delete = e => {
  setToDos(toDos.filter((todo) => parseInt(todo.id) !== parseInt(e)));
}

const Check = e => {
  let newToDos = toDos.map((item) => {
    if (item.id === e) {
        return { ...item, check: !item.check };
    }
    else {
        return item;
    }
    })
  setToDos(newToDos)
}


const ChangeClassName = event => {
  if (event === true) {
      return "completed"
  }
  else if (event === false) {
      return "unCompleted"
  }
}

useEffect(() => {
  console.log(toDos);
  localStorage.setItem("key", JSON.stringify([...toDos]))
}, [toDos])




 
  return (
    <div> <ol start="number">
      {toDos.map((item, i) => (
        
        <div key={i} className='toDos'>
           <li key={item.id} className={ChangeClassName(item.check)}>
              {item.name}    
          </li> 
          <div id="right" > 
            { item.check ? <ImCheckmark onClick={() => Check(item.id)}/> : <ImCheckboxUnchecked onClick={() => Check(item.id)}/>}
            <FaTrash id="trash" onClick={() => Delete(item.id)} /> 
          </div>
        </div>
      ))} </ol>
    </div>
  )
}

export default Container;