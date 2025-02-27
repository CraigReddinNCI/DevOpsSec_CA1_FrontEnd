import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation () {
  return (
    <Navbar expand="lg" id="navbar">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" id="navlink">
            Home Page
          </Nav.Link>
          <Nav.Link as={Link} to="/view_all" id="navlink">
            Show Todo's
          </Nav.Link>
          <Nav.Link as={Link} to="/create" id="navlink">
            Create Todo
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;

