import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export function TableVideos({ videos, onClickDelete }) {
    return (
        <Table striped hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th />

                </tr>
            </thead>
            <tbody>
                {videos.length === 0 ? (
                    <tr>
                        <td colSpan={4} className='text-center'>No Videos Found</td>
                    </tr>
                ) : videos.map((video) => (

                    <tr key={video.id}>
                        <td>{video.id}</td>
                        <td>{video.title}</td>
                        <td>{video.releaseYear}</td>
                        <td>
                            <div className='d-grid gap-1 d-sm-block'>
                                <Button size='sm' as={Link} to={`/dashboard/videos/${video.id}`}>Edit</Button>
                                <Button size='sm' variant="danger" className="ms-sm-1" onClick={() => onClickDelete(video.id)}>Delete</Button>
                            </div>

                        </td>
                    </tr>
                )
                )}
            </tbody>
        </Table>
    );
}