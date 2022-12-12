import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const NavBar = (props) => {
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      Search(props.searchInput);
    }
  };

  const Search = (value) => {
    console.log(value);
    fetch(`https://api.mangadex.org/manga?title=${value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        props.setMangaData(data.data);
      });
  };

  return (
    <Navbar key="lg" bg="warning" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">MangaMVP</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action2">Favorites</Nav.Link>
              <NavDropdown
                title="Tags"
                id={`offcanvasNavbarDropdown-expand-lg`}
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
            <Form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  props.setSearchInput(e.target.value);
                }}
                onKeyPress={(e) => {
                  handleEnter(e);
                }}
              />
              <Button
                variant="outline-danger"
                onClick={(e) => {
                  Search(props.searchInput);
                }}
              >
                Search
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
