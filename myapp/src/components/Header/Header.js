import React from 'react'
import { useState } from 'react';



function Header() {
    
    const name = value.
    const [form, useForm] = useState({name:"",});

    const onChangeInput = ()=>{               

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