import {Navbar, Container, Nav} from 'react-bootstrap';
import Logo from '../../assets/img/assista-logo.png';

export function Header() {
    return (
        <header>
            <Navbar expand="md" className='header-navbar'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Logo Assista" height={50} width={60} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/library">Video Library</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}