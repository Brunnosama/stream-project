import React from 'react';
import { Alert, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/User/User.selectors';


export function Favorites({ favorites }) {
    const user = useSelector(selectUser)

    // YOU CAN DESTRUCTURE IN MANY WAYS, BUT WITHIN THE PROPS IS LESS VERBOUS (REMEMBER TO USE {}).

    return (
        <>
            {user ? (
                <>
                    <h2>Favorites</h2>
                    {favorites.length === 0 ? (
                        <Alert> Not on Favorites</Alert>
                    ) : (
                        <Table striped responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* UNLESS YOU USE THE SAME BODY ELSEWHERE, MAP THE PROPS WITHIN THE ELEMENT ITSELF */}
                                {favorites.map((favorite) => (
                                    <tr key={favorite.id}>
                                        <td>{favorite.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    )}
                </>
            ) : ('')

            }


        </>
    );
}

// CREATE COMPONENTS USED WITHIN A SINGLE SCREEN IN "VIEWS" FOLDER, INSIDE RESPECTIVE "VIEW" FOLDER. EX: "views/VideoDetails/favorites.js"