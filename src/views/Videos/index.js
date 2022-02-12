import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { CardVideo } from "../../components/CardVideo";
import { Layout } from "../../components/Layout";

export function VideosView() {

    const [loading, setLoading] = useState(true)

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/videos')
            .then((response) => response.json())
            .then(data => {
                setVideos(data)
                setLoading(false)
            })
    }, [])

    const videosElements = videos.map((video) => (
        <Col key={video.id} className='grid-video-item mb-3' xs={6} md={4} lg={3} >
            <CardVideo video={video} />
        </Col>));

    return (
        <Layout>
            <Container>
                <h4 className="text-md-left nt-4">Videos</h4>
                {loading ? (
                    <div className='text-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
                ) : (
                    <Row>
                        {videosElements}
                    </Row>)}

            </Container>
        </Layout>
    )
}
