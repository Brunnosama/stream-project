import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export function TableVideos({videos}) {
    return (
        <Table striped hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th />

                </tr>
            </thead>
            <tbody>
                {videos.map((video) => (
                    
                        <tr key={video.id}>
                            <td>{video.id}</td>
                            <td>{video.title}</td>
                            <td>{video.genres}</td>
                            <td className='d-grid gap-1 d-sm-table-cell'>
                                <Button size='sm' as={Link} to={`/dashboard/videos/${video.id}`}>Edit</Button>
                                <Button size='sm' variant="danger" className="ms-sm-1">Delete</Button>
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </Table>
    );
}