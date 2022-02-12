import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import VideoBg from '../../assets/img/video-bg.png'
import { Favorites } from './Favorites';
import { FavoritesForm } from './FavoritesForm';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function VideosDetailsView() {

    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [video, setVideo] = useState()
    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch(`http://localhost:3001/videos/${id}?_embed=favorites`)
            const data = await response.json()
            setVideo(data)
            setLoading(false)
        }
        fetchVideos()

    }, [id])

    if(loading) {
        return (
            <div className='text-center mt-4'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div> 
        )
    }

    return (
        <Layout>
            <Container>
                <h1 className="text-left mt-4"><strong>Movie Title: </strong>{video.name}</h1>
                <img className="mx-auto d-block" src={VideoBg} alt="img here" width={340} height={230}>
                </img>
                <p>{video.description}</p>
                <Favorites favorites={video.favorites} />
                <FavoritesForm />
            </Container>
        </Layout>
    )
}