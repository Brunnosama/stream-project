import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoBg from '../../assets/img/video-bg.png'

export function CardVideo({video}) {
    return (
        <Card as='article' className='text-center shadow card-video'>
            <Card.Img src={VideoBg} alt="video background image" />
            <Card.ImgOverlay as={Link} to={`/video/${video.id}`}>
                <Card.Body>
                    <Card.Title >{video.name}</Card.Title>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );
}