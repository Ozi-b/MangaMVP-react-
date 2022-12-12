import { Card, Col, Button } from "react-bootstrap";
function MangaCards(props) {
  return props.mangaData.map((elements) => (
    <Col key={elements.id}>
      <Card
        // className="mx-1"
        key={elements.id}
        id={elements.id}
        style={{ width: "24rem", height: "13rem" }}
      >
        <Card.Body className="mb-2">
          <Card.Title>{elements.attributes.title.en}</Card.Title>
          <Card.Text>
            Status: {elements.attributes.status}
            <br></br>
            Last Chapter: {elements.attributes.lastChapter}
          </Card.Text>
          <br></br>
          <Button varient="primary">Add to Favorites</Button>
        </Card.Body>
      </Card>
    </Col>
  ));
}

export default MangaCards;
