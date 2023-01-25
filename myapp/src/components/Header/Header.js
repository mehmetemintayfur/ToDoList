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
            <input
                placeholder="Please enter your To Do"
                value={form.name}

            />
            <button> Add </button>

        </div>
    )
}

export default Header;