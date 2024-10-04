import React, { useState } from "react";

import { data } from "../helper/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import Player from "./Player";

const CardContainer = () => {
    // console.log(data)

    const [search, setSearch] = useState("");


    //! 1. WAY
    // let filteredData = "";
    // filteredData = data.filter((a) => a.name.includes(search));
    // console.log(filteredData)
    return (
        <>
            <Form.Control
                className="w-50 m-auto"
                type="search"
                placeholder="Search Player..."
                onChange={(e) => setSearch(e.target.value)}
            />

            <Container className="player-container my-4 rounded-4 p-3">
                <Row className="g-3 justify-content-center">
                    {data.map((player) => (
                        <Col md={6} lg={4} xl={3} key={player.name}>
                            <Player {...player} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default CardContainer;
