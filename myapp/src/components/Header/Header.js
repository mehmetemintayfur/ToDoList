import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import ListContext from '../../context/ListContext';
import { Formik, Field, Form } from 'formik';


function Header() {
    
   // const name = value.
    //const [form, useForm] = useState({name:"",});

    //const onChangeInput = ()=>{               //<button onClick={() => {setList([...list,"sd"] ) }}> Add </button>

    //}

    const [list,setList] = useContext(ListContext)
    
    function addToTheList(){
        setList([...list,"asd"])
    }


    return (
    <div>
            <h3>  To Do List </h3>
      <Formik
      initialValues={{
        addtask: '',
      }}
      onSubmit={async (values) => {
        setList([...list,values.addtask])
      }}
    >
       <Form>
        <label htmlFor="addtask">Add a task</label>
        <Field id="addtask" name="addtask" placeholder="Add a task" />

        <button type="submit">Submit</button>
        </Form>
      </Formik>
            

    </div>
    )
}

export default Header;