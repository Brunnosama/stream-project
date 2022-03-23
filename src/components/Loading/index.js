import { Spinner } from 'react-bootstrap';

export function Loading () {
    return (
        <div className='text-center mt-4'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}