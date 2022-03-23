import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export function Topbar({toOpen}) {
    return (
        <NavbarStyled variant="light" expand="lg">
            <Container fluid>
                <NavbarToggleStyled variant='light' onClick={toOpen} />
                <Nav className='ms-auto'>
                    <Dropdown align='end'>
                        <DropdownToggleStyled variant='light'>
                            User
                        </DropdownToggleStyled>
                        <Menu>
                            <Dropdown.Item>Exit</Dropdown.Item>
                        </Menu>
                    </Dropdown>
                </Nav>
            </Container> 
        </NavbarStyled>
    )
}

const Menu = styled(Dropdown.Menu)`
    position: absolute !important;
    background-color: #E0CFD8;
`
const NavbarStyled = styled(Navbar)`
    background-color: ${props => props.theme.componentBackground};
`
const NavbarToggleStyled = styled(Navbar.Toggle)`
	background-color: #E0CFD8;
    border: none;`

const DropdownToggleStyled = styled(Dropdown.Toggle)`
	background-color: #E0CFD8;
    border: none;`