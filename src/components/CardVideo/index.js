import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoBg from '../../assets/img/video-bg.png';
import styled from "styled-components";

export function CardVideo({video}) {
    return (
        <CardStyled forwardedAs='article' className='text-center shadow card-video'>
            <Card.Img src={VideoBg} alt={`${video.video}`} />
            <Card.ImgOverlay as={Link} to={`/videos/${video.id}`}>
                <CardBodyStyled>
                    <Card.Title >{video.name}</Card.Title>
                </CardBodyStyled>
            </Card.ImgOverlay>
        </CardStyled>
    );
}

const CardStyled = styled(Card)`
height: 100% ;
`

const CardBodyStyled = styled(Card.Body)`
display: flex;
flex-direction: column;
`