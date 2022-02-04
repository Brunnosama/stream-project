import { Col, Container, Row } from "react-bootstrap";
import { CardVideo } from "../../components/CardVideo";
import { Layout } from "../../components/Layout";

const videos = [
    {
        id: 1,
        name: 'movie_name_here_1',
        img: 'insert_link_here_1',
    },
    {
        id: 2,
        name: 'movie_name_here_2',
        img: 'insert_link_here_2',
    },
    {
        id: 3,
        name: 'movie_name_here_3',
        img: 'insert_link_here_3',
    },
    {
        id: 4,
        name: 'movie_name_here_4',
        img: 'insert_link_here_4',
    }
]


export function VideosView() {
    const videosElements = videos.map((video) => {
        return (
            <Col xs={6} md={4} lg={3} >
                <CardVideo video={video}/>
            </Col>
        )

    })

    return (
        <Layout>
            <Container>
                <h4 className="text-md-left">Favorites</h4>
                <Row>
                    {videosElements}
                </Row>
                <h4 className="text-md-left">Movies</h4>
                <Row>
                    {videosElements}
                </Row>
                <h4 className="text-md-left">Shows</h4>
                <Row>
                    {videosElements}
                </Row>
            </Container>



        </Layout>
    )
}
