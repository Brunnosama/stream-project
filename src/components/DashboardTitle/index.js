import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function DashboardTitle({ children, buttonText, buttonLink }) {
    return (
        <div className='mt-4 mb-2 d-sm-flex align-items-center'>
            <h1 className='mb-0'>{children}</h1>
            {buttonText && buttonLink && (
                <Button size='sm' as={Link} to={buttonLink} className='ms-sm-3'>{buttonText}</Button>
            )}
        </div>
        );
}
