import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" href="/">
              Home
            </Nav.Link>
            <Nav.Link to="customers" href="customers">
              Customers
            </Nav.Link>
            <Nav.Link to="products" href="products">
              Products
            </Nav.Link>
            <Nav.Link to="cart" href="cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
