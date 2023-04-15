import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"

const HomePage = () => {

    return <>
        <Container>
            <Row className="mt-4">
                <Col>
                    <p>Home page</p>
                    <Button variant="primary">Lets try it!</Button>
                </Col>
            </Row>
        </Container>
    </>
}


export default HomePage;