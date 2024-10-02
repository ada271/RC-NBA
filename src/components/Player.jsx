import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, img, statistics }) => {
    const [showResim, setShow] = useState(true);

    return (
        <Card
            onClick={() => setShow(!showResim)}
            className="rounded-2 m-auto player-kard"
            role="button"
        >
            {showResim ? (
                <Card.Img className="player-foto" variant="top" src={img} />
            ) : (
                <ul>
                    {statistics.map((item,index) => (
                        🏀<li key={index} >{item}</li>
                    ))}
                </ul>
            )}

            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    );
};

export default Player;
