import React from 'react'
import { Container, Image } from "react-bootstrap";
import nbaLogo from "../assets/nba-logo.png"


const Header = () => {
  return (
    <Container>
        <Image src={nbaLogo}/>

    </Container>
  )
}

export default Header