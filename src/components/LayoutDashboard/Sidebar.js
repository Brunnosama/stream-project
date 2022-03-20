import { CloseButton, Nav } from "react-bootstrap";
import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";

const menuItems = [
    {
        to: '/portal',
        text: 'Dashboard'
    },
    {
        to: '/portal/videos',
        text: 'Videos'
    }
]

export function Sidebar({ toClose, isOpen }) {
    return (
        <SidebarStyled isOpen={isOpen} className='bg-dark text-white d-flex flex-column'>
            <CloseButton onClick={toClose} variant="white" className='ms-auto' />
            <p className='h1'>Assista Service</p>
            <hr />
            <Nav variant="pills" className="flex-column">
                {menuItems.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </Nav>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    margin-left: ${props => props.isOpen ? '0' : '-100%'};
    transition-property: width;
    transition: all .4s;

    @media screen and (max-width: 915px) and (orientation:landscape) {
        right: 0;
        top: 0;
        left: 0;
        margin-left:0;
        margin-top: ${props => props.isOpen ? '0' : '-100%'};
        transition: all .4s;
    }
`