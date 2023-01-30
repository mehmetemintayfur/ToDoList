import {createContext,useState } from "react";

const ListContext = createContext()

export const ListProvider = ({children}) =>{
    const [list,setList] =  useState([]);
    const values = [list,setList]
    return <ListContext.Provider value={values}> {children} </ListContext.Provider> ;
};

export default ListContext;