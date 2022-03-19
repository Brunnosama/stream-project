import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function SidebarItem({item}) {

    return (
        <Nav.Item >
            <Nav.Link as={Link} to={item.to} active>
                {item.text}
            </Nav.Link>
        </Nav.Item>
    );
}