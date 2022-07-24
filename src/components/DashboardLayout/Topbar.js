import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../services/Users.service";

const selectUser = (state) => {
    return state
}

export function Topbar({toOpen}) {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () =>{
        logout()
        const action ={
            type: 'USER_LOGOUT'
        }
        dispatch(action)
        navigate('/dashboard/login')
    }
    return (
        <NavbarStyled variant="light" expand="lg">
            <Container fluid>
                <NavbarToggleStyled variant='light' onClick={toOpen} />
                <Nav className='ms-auto'>
                    <Dropdown align='end'>
                        <DropdownToggleStyled variant='light'>
                            {user.name}
                        </DropdownToggleStyled>
                        <Menu>
                            <Dropdown.Item onClick={handleLogout}>Exit</Dropdown.Item>
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