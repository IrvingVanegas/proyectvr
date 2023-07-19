import React from "react";
import Home from "../pages/Home";
import Medicion from "../pages/Medicion";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from 'react-router-dom';


function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Principal</Nav.Link>
            <Nav.Link as={Link} to="/medicion" >Analisis de Datos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/medicion' element={<Medicion/>} />
        <Route render={function () {
          return <p>Not found</p>
        }} />
      </Routes>
      </div>
    </>
  );
}

export default Navigationbar;