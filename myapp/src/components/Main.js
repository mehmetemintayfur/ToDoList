import Footer from "./Footer/Footer"
import Container from "./Container/Container"
import Header from "./Header/Header"
import { useState } from "react";
import PropTypes from 'prop-types'
import "./Main.css"




function Main() {

    const [toDos,setToDos] = useState(
        JSON.parse(localStorage.getItem("key")) || [] 
    );

    return (
        <div>
    
            <Header toDos={toDos} setToDos={setToDos} />
            <br/>
            <Container toDos={toDos} setToDos={setToDos} />
            <Footer toDos={toDos} setToDos={setToDos} />
        
        </div>
    )
}

Main.propTypes = {
    toDos: PropTypes.array,
}

export default Main;