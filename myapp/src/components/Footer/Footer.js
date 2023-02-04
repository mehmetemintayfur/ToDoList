import React from 'react'
import { useEffect } from 'react'

function Footer({ toDos, setToDos }) {
  
  const ClearList = () => {
    setToDos([])
  }

  const ClearCheckedTasks = () => {
        
    setToDos(toDos.filter((todo) => {
        return todo.check !== true
    }))
  } 
  
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify([...toDos]))
  }, [toDos])
  
  return (

    <div> 
      
      <button className="footer" onClick={ClearList}>Clear All</button>
      <button className="footer" onClick={ClearCheckedTasks}> Clear Checked Tasks </button>  
      
    </div>
  )
}

export default Footer;