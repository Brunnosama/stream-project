import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from './assets/img/assista-logo.png';

function App() {
  return (
    <Navbar expand="md" className='header-navbar'>
  <Container>
    <Navbar.Brand href="#home">
      <img src={Logo} alt="Logo Assista"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#catálogo">Video Library</Nav.Link>
        <Nav.Link href="#perfil">Profile</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default App;
