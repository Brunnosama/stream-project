import React, { useCallback, useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import VideoBg from '../../assets/img/video-bg.png'
import { Favorites } from './Favorites';
import { FavoritesForm } from './FavoritesForm';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { NotFoundView } from '../NotFound';
import { getVideoById } from '../../services/Videos.service';

export function VideosDetailsView() {

    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [video, setVideo] = useState()
    const [generalError, setGeneralError] = useState()

    //CREATE A FUNCTION USING THE HOOK "useCallback" TO ENSURE THAT THE FUNCTION WILL BE CREATED ONLY ONE TIME. THERE FOR, IT COULD BE PUT TO THE "useEffect" DEPENDENCIES TO BE WATCHED WITHOUT FIRING A LOOP. 
    const fetchVideos = useCallback(
        async () => {
            try {
                const data = await getVideoById (id)

                setVideo(data)
                setLoading(false)
            } catch (error) {
                const message = error.message === 'Response not OK.' ? '404' 
                : 'Fail to fetch video data. Reload the page.'
                setGeneralError(message)
                setLoading(false)
            }
        }, [id]
    )
    
    useEffect(() => {
        //USE THE LOADING WHEN CHANGING PAGES BUT NOT WHEN UPDATING THE FAVORITES.
        setLoading(true)
        // FUNCTIONS CREATED INSIDE HOOKS CANNOT BE CALLED OUTSIDE OF THEM. SO CREATE THEM OUTSIDE SO YOU COULD CALL IT IN DIFFERENT PLACES.
        fetchVideos()
//THE "useEffect" HOOK HAVE DEPENDENCIES THAT ARE WATCHED, SO EVERY TIME THEY CHANGE, THE 'EFFECT' WILL BE ACTIVATED AGAIN:
    }, [fetchVideos])

    const handleOnRegister = () =>{
        fetchVideos()
    }
    if (loading) {
        return (
            <div className='text-center mt-4'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    if (generalError === '404') {
        return <NotFoundView />
    }

    return (
        <Layout>
            <Container>
                {generalError ? (
                    <Alert variant="danger" className="mt-4">{generalError}</Alert>
                ) : (
                    <>
                        <h1 className="text-left mt-4"><strong>Movie Title: </strong>{video.name}</h1>

                        <img className="mx-auto d-block" src={VideoBg} alt="img here" width={340} height={230} />

                        <p>{video.description}</p>
                        <Favorites favorites={video.favorites} />
                        {/* A CHILD COMPONENT PASSES INFORMATION (OR DATA) TO THE PARENT COMPONENT THROUGH A FUNCTION. THE FUNCTION, CREATED IN THE PARENT COMPONENT, IS SENT AS A PROPERTY TO THE CHILD COMPONENT. THERE, WHEN CALLED TO EXECUTE, IT "INVOKES" THE EXECUTION OF THE FUNCTION RELATED TO THAT PROPERTY ON THE PARENT SIDE: */}
                        <FavoritesForm videoId={id} onRegister={handleOnRegister} />
                    </>
                )}

            </Container>
        </Layout>
    )
}