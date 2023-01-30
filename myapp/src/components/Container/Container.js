import React from 'react'
import { useContext } from 'react';
import ListContext from '../../context/ListContext';

function Container() {

  const [list,setList] = useContext(ListContext);
  
  return (
    <div>
       
     List : { list.map((list,item) => (
        <div> {list} <button> Check </button> </div>
      ))
      }  

    
    </div>
  )
}

export default Container;