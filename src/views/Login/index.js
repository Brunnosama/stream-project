import { Container } from "react-bootstrap";
import styled from "styled-components";
import { AuthForm } from "../../components/AuthForm";
import {Header} from "../../components/Layout/Header"

export function LoginView() {
    return (
        <>
            <Header />
            <main className='p-3 d-flex align-items-center'>
                <ContainerStyled className='rounded p-3 p-md-5'>
                    <AuthForm />
                </ContainerStyled>
            </main>
        </>
    );
}

const ContainerStyled = styled(Container)`
background-color: #E0CFD8;
`