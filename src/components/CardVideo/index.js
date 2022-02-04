import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoBg from '../../assets/img/video-bg.png'

export function CardVideo(props) {
    console.log(props)
    return (
        <Card as='article' className='text-center shadow mb-3'>
            <Card.Img src={VideoBg} alt="video background image" />
            <Card.ImgOverlay as={Link} to="/video-page/id">
                <Card.Body>
                    <Card.Title >{props.video.name}</Card.Title>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );
}