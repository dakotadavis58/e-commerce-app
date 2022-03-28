import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const MainNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="customers">
              Customers
            </Nav.Link>
            <Nav.Link as={Link} to="products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
