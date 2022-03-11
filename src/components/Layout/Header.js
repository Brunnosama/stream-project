import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../assets/img/assista-logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function Header() {
    return (
        <header>
            <NavbarStyled expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="Logo Assista" height={50} width={60} />
                    </Navbar.Brand>
                    <NavbarToggleStyled aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLinkStyled forwardedAs={Link} to="/">Home</NavLinkStyled>
                            <NavLinkStyled forwardedAs={Link} to="/videos">Video Library</NavLinkStyled>
                            <NavLinkStyled forwardedAs={Link} to="/profile">Profile</NavLinkStyled>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </NavbarStyled>
        </header>
    )
}

const NavbarStyled = styled(Navbar)`
background-color: ${props => props.theme.componentBackground};
`

const NavLinkStyled = styled(Nav.Link)`
background-color:#2e1521;
color: #B8B0B4 !important;
text-align: center;
border-radius: 3px;
margin: 5px;
&.active { 
    box-shadow: 0 0 1em rgba(184, 176, 180, 0.3)
}
@media (min-width: 768px) {
    margin: 0 5px;
}
`
const NavbarToggleStyled = styled(Navbar.Toggle)`
background-color: #E0CFD8;
border: none;
`