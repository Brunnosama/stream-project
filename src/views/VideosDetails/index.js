import React from 'react';
import { Container } from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import VideoBg from '../../assets/img/video-bg.png'

const video = {

    id: 1,
    title: "Movie 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus."
}

export function VideosDetailsView() {
    return (
        <Layout>
            <Container>
                <h1 className="text-left mt-4"><strong>Movie Title: </strong>{video.title}</h1>
                <img className="mx-auto d-block"src={VideoBg} alt="img here" width={340} height={230}>
                </img>
                <p>{video.description}</p>
            </Container>
        </Layout>)
}