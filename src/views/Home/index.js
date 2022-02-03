import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner from '../../assets/img/assista-banner.png';

export function HomeView() {
    return (
        <Layout>
            <Container>
                <div className='my-3 my-md-4 banner-home'>
                    <h3>
                        The most complete <br /> Streaming Service.
                    </h3>
                    <img src={Banner} alt='Assista Banner' className='img-fluid' height={202} width={333} />
                </div>
            </Container>
        </Layout>)
}