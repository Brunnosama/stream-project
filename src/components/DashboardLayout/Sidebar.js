import { CloseButton, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";
import { selectUser } from "../../store/User/User.selectors"

const menuItems = [
    {
        to: '/dashboard',
        text: 'Dashboard',
        checkAllPath: true,
        userTypes: [1, 2]
    },
    {
        to: '/dashboard/videos',
        text: 'Videos',
        checkAllPath: false,
        userTypes: [1]
    }
]

export function Sidebar({ toClose, isOpen }) {
    const user = useSelector(selectUser)
    return (
        <SidebarStyled isOpen={isOpen} className='text-white d-flex flex-column p-3'>
            <CloseButton onClick={toClose} variant="white" className='ms-auto d-lg-none' />
            <p className='h1'>Assista Service</p>
            <hr />
            <Nav variant="pills" className="flex-column">
                {menuItems.filter(item =>
                    item.userTypes.includes(user.type)).map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
            </Nav>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
    width: 280px;
    background-color: ${props => props.theme.componentBackground};
    @media (max-width: 991px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 999;
        margin-left: ${props => props.isOpen ? '0' : '-100%'};
        transition-property: width;
        transition: all .3s;
    }
/* 
    @media screen and (max-width: 915px) and (orientation:landscape) {
        right: 0;
        top: 0;
        left: 0;
        margin-left:0;
        margin-top: ${props => props.isOpen ? '0' : '-100%'};
        transition: all .4s; 
    } */
`