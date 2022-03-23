import { Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function SidebarItem({item}) {
    const resolved = useResolvedPath (item.to)
    const match = useMatch ({path: resolved.pathname})

    return (
        <Nav.Item >
            <Nav.Link as={Link} to={item.to} active={match} className='text-white'>
                {item.text}
            </Nav.Link>
        </Nav.Item>
    );
}