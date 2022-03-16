import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function CardVideo({video}) {
    return (
        <CardStyled forwardedAs='article' className='text-center shadow card-video'>
            <Card.Img src={video.img} alt={`${video.title}`} />
            <Card.ImgOverlay as={Link} to={`/videos/${video.id}`}>
                <CardBodyStyled>
                    <Card.Title >{video.title}</Card.Title>
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