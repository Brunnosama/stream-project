import styled from 'styled-components'

function Footer() {
    return (
        <FooterStyled  className='text-center footer'>
            <p className='m-1'>All rights reserved to Assista™</p>
        </FooterStyled >
    )
}

const FooterStyled = styled.footer `
    background-color: ${props => props.theme.componentBackground};
    color: #E0CFD8; 
`

export default Footer;