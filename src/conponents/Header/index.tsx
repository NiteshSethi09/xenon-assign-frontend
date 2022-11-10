import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Heading = () => {
  const [authenticated, setAuthenticated] = useState<string | boolean>(
    localStorage.getItem("user_credentials")! || false
  );

  useEffect(() => {
    setAuthenticated(localStorage.getItem("user_credentials")! || false);
  }, [localStorage.getItem("user_credentials")!]);

  const handleLogout = () => {
    localStorage.removeItem("user_credentials");
    (window.location as any) = "/";
  };
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/">Book Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "end" }}>
            <Nav
              style={{ borderBottom: "none" }}
              className="my-2 my-lg-0"
              variant="tabs"
              defaultActiveKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              </Nav.Item>
              {!authenticated ? (
                <>
                  <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <Nav.Item>
                  <Nav.Link onClick={handleLogout}>logout</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default Heading;
