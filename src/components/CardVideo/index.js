import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function CardVideo({video}) {
    return (
        <CardStyled forwardedAs='article' className='text-center shadow card-video'>
            <CardImgStyled className='opacity-75' src={video.img} alt={`${video.title}`} />
            <Card.ImgOverlay className='text-decoration-none text-light' as={Link} to={`/videos/${video.id}`}>
                <CardBodyStyled>
                    <Card.Title className='fw-bold bg-dark fs-6 rounded ' >{video.title}</Card.Title>
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
const CardImgStyled = styled(Card.Img)`
overflow: auto;
background-size: cover;
`
