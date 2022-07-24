import { Container } from "react-bootstrap";
import styled from "styled-components";

export function LoginView() {
    return (
        <main className='p-3 d-flex align-items-center'>
        <ContainerStyled className='rounded'>
            <p>Login</p>
        </ContainerStyled>
        </main>
    );
}

const ContainerStyled = styled (Container)`
background-color: #E0CFD8;
`