import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";


export function VideosView() {
    return (
        <Layout>
            <Container>
                <h4 className="text-md-left">Favorites</h4>
                <Row>
                    <Col xs={6} md={4} lg={3} >
                        <Card as='article' className='text-center shadow'>
                            <Card.Body as={Link} to="/video-page/id">
                                <Card.Title >Favorite 1</Card.Title>
                                <Card.Text>insert video here</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h4 className="text-md-left">Movies</h4>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                    <Card as='article' className='text-center shadow'>
                        <Card.Body as={Link} to="/video-page/id">
                                <Card.Title>Movie 1</Card.Title>
                                <Card.Text>insert video here</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h4 className="text-md-left">Shows</h4>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                    <Card as='article' className='text-center shadow'>
                        <Card.Body as={Link} to="/video-page/id">
                                <Card.Title>Show 1</Card.Title>
                                <Card.Text>insert video here</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



        </Layout>
    )
}
