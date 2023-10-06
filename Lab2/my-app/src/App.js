import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';




function App() {
  return (
    <div className="App">
    {/* <Header></Header>

      <Content></Content>

       <Footer></Footer>  */}

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#create">Create</Nav.Link>

          </Nav>
      </Container>
    </Navbar>  
    </div>
  );
}

export default App;
