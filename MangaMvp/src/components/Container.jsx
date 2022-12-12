import { Container, Row } from "react-bootstrap";
import MangaCards from "./MangaCard";

const StackCont = (props) => (
  <Container>
    <Row>
      <MangaCards {...props} />
    </Row>
  </Container>
);

export default StackCont;
