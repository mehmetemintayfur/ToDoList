import React from 'react'
import { useState } from 'react';
import {ReactCompenent as checkicon} from '../../assets/checkicon.svg'
import {ReactCompenent as trashicon} from '../../assets/trashicon'



function Header({ toDos, setToDos }) {
    
    
    
    const [form, setForm] = useState({name: "", id: 1, check: false });

    const onChangeInput = (event)=>{               
        console.log(event.target.value);
       
    }

    const onSubmit = (event) => {

      event.preventDefault()

      if (form.name === "") {
          alert("You have to enter something ")
          return false
      }

      setForm({
          ...form,
          name: "",
          check: false,
          id: form.id += 1,
      })

      setToDos([...toDos, form])
      localStorage.setItem("key", JSON.stringify([...toDos, form]))


  }


    return (
    <div>
          <h3>  To Do List </h3>
          <form onSubmit={onSubmit}>
              <input
                name='name'
                onChange={onChangeInput}
                placeholder='Enter the task'>
              </input>
              <button> Add </button>
            </form>
      
    </div>
    )
}

export default Header;