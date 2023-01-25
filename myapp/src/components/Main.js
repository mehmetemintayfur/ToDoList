import Footer from "./Footer"
import Container from "./Container"
import Header from "./Header"


import {useState} from 'react'

function Main() {

    const [toDos,setToDos] = useState(
        JSON.parse(localStorage.getItem("key") || [] ));




    return (
        <div>
            <Header />
            <Container />
            <Footer/>
        </div>
    )
}
export default Main;