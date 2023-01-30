import Footer from "./Footer/Footer"
import Container from "./Container/Container"
import Header from "./Header/Header"
import { ListProvider } from "../context/ListContext"



function Main() {

    //const [toDos,setToDos] = useState(
      //  JSON.parse(localStorage.getItem("key") || [] ));

    return (
        <div>
        <ListProvider> 
            <Header> </Header>
            <Container> ds </Container>
            <Footer> </Footer>
        </ListProvider>
        </div>
    )
}

export default Main;