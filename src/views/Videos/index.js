import { Col, Container, Row } from "react-bootstrap";
import { CardVideo } from "../../components/CardVideo";
import { Layout } from "../../components/Layout";

const videos = [
    {
        id: 1,
        title: 'Video 1',
        img: 'img_alt_text_1',
    },
    {
        id: 2,
        title: 'Video 2',
        img: 'img_alt_text_2',
    },
]

export function VideosView() {

    const videosElements = videos.map((video) => (
        <Col key= {video.id} className='grid-video-item mb-3'xs={6} md={4} lg={3} >
            <CardVideo video={video} />
        </Col>));

    return (
        <Layout>
            <Container>
                <h4 className="text-md-left">Videos</h4>
                <Row>
                    {videosElements}
                </Row>
                
            </Container>
        </Layout>
    )
}
