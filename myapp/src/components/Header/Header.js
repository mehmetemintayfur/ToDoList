import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'react-uuid'




function Header({ toDos, setToDos }) {



  const [form, setForm] = useState({ name: "", id: 0, check: false });

  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {

    event.preventDefault()

    if (form.name === "") {
      alert("You have to enter something ")
      return false
    }

    setForm({
      ...form,
      name: event.target.value,
      check: false,
      id: form.id+1,
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
          value={form.name}
          onChange={onChangeInput}
          placeholder='Enter the task'>
        </input>
        <button> Add </button>
      </form>

    </div>
  )
}

export default Header;