import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import img1 from './images/pic.jpg.png'
// import { Link } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
      {[false,].map((expand) =>(
        <Navbar key={expand} expand={expand} className=" bg-body-tertiary mb-3">
          <Container fluid className='sticky top-0 bg-white pb-2'>
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#"><img className='sami pt-3' src={img1}></img></Navbar.Brand>
            <Navbar.Brand href="#">Pakistan</Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <div class="max-w-fit	">
<img src='https://baroque.pk/cdn/shop/files/MAin_BAnner68.jpg?v=1726313443&width=1400' />
 <Button className='btn btn-dark relative bottom-14'>SHOP NOW</Button>
</div>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;