import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner from '../../assets/img/assista-banner.png';
import styled from "styled-components";

export function HomeView() {
    return (
        <Layout>
            <Container>
                <BannerHome className='my-3 my-md-4'>
                    <h3>
                        The most complete <br /> Streaming Service.
                    </h3>
                    <img src={Banner} alt='Assista Banner' className='img-fluid' height={202} width={333} />
                </BannerHome>
            </Container>
        </Layout>)
}

const BannerHome = styled.div`
color: #E0CFD8;
text-align: center;
align-items: center;
justify-content:center;

@media (min-width: 768px){

& > div:first-child {
        flex: 1 1 60%;
    }
}
`