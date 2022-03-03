import { useEffect, useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { CardVideo } from "../../components/CardVideo";
import { Layout } from "../../components/Layout";
import { getVideos } from "../../services/Videos.service";

export function VideosView() {

    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState([])
    const [generalError, setGeneralError] = useState()

    useEffect(() => {

        const fetchVideos = async () => {
            try {
                const data = await getVideos()
                setVideos(data)
            } catch {
                setGeneralError('Sorry, but the videos are not available. Reload the page.')
            }
            setLoading(false)
        }
        fetchVideos()
    }, [])

    const videosElements = videos.map((video) => (
        <Col key={video.id} className='grid-video-item mb-3' xs={6} md={4} lg={3} >
            <CardVideo video={video} />
        </Col>));

    return (
        <Layout>
            <Container>
                <h4 className="text-md-left nt-4">Videos</h4>
                {generalError && (
                    <Alert variant='danger'>{generalError}</Alert>
                )}
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
