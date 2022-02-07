import React from 'react';
import { Table } from 'react-bootstrap';


export function Favorites({ favorites }) {

    // YOU CAN DESTRUCTURE IN MANY WAYS, BUT WITHIN THE PROPS IS LESS VERBOUS (REMEMBER TO USE {}).

    return (
        <>
            <h2>Favorites</h2>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {/* UNLESS YOU USE THE SAME BODY ELSEWHERE, MAP THE PROPS WITHIN THE ELEMENT ITSELF */}
                    {favorites.map((favorite) => (
                        <tr key={favorite.id}>
                            <td>{favorite.id}</td>
                            <td>{favorite.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

// CREATE COMPONENTS USED WITHIN A SINGLE SCREEN IN "VIEWS" FOLDER, INSIDE RESPECTIVE "VIEW" FOLDER. EX: "views/VideoDetails/favorites.js"