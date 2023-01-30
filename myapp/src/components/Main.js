import Footer from "./Footer/Footer"
import Container from "./Container/Container"
import Header from "./Header/Header"




function Main() {

    const [toDos,setToDos] = useState(
    JSON.parse(localStorage.getItem("key") || [] ));

    return (
        <div>
    
            <Header> </Header>
            <Container> </Container>
            <Footer> </Footer>
        
        </div>
    )
}

export default Main;