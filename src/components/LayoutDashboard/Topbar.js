import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export function Topbar({toOpen}) {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle onClick={toOpen} />
                <Nav className='ms-auto'>
                    <Dropdown align='end'>
                        <Dropdown.Toggle variant='light'>
                            Fulano
                        </Dropdown.Toggle>
                        <Menu>
                            <Dropdown.Item>Exit</Dropdown.Item>
                        </Menu>
                    </Dropdown>
                </Nav>
            </Container> 
        </Navbar>
    )
}

const Menu = styled(Dropdown.Menu)`
    position: absolute !important;
`