import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import logo from "./logo.svg";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div id="root">
      <div class=".nav">
        <Navbar bg="red" variant="dark">
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" margin="30px"></img>{" "}
            Kellen Bavis Website
          </Navbar.Brand>
        </Navbar>
      </div>
      <Container fluid>
        <Row fluid>
          <Col md="2">
            <Image
              class="profile_pic"
              src="https://kellenbavisbucket.s3.amazonaws.com/profile_picture.jpg"
              width="300px"
              alt="Profile picture"
            ></Image>
          </Col>
          <Col md="6">
            <Row>
              <h1>Kellen Bavis</h1>
            </Row>
            <Row>
              <p>
                I am currently a Senior at the University at Albany with a major
                in Computer Science and a minor in both Mathmatics and
                Informatics. Following my graduation, I plan to pursue a career
                as a Software Engineer. I am primarly interested in back-end
                development, but have also grown to enjoy aspects regarding the
                front-end too. I have a thorough understanding of multiple
                programming languages. I am proficient in Java, JavaScript,
                Python, CSS, and HTML. Some activities outside of programming
                that I enjoy include both weightlifting and cooking. In a field
                that demands large amounts of sitting around, I really look
                forward to being able to get out and get some exercise.{" "}
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
