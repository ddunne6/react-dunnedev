import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

import '../styles/aboutMe.scss'

function DunnedevAboutMe() {
    return (
        <div className="aboutMeFrame">
            <Container id='about' className="aboutMeContent">
                <Row>
                    <Col>
                        <h1>About Me</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius vitae elit pharetra congue. Aenean sollicitudin aliquam turpis, at gravida orci porta ut. Nulla nulla massa, ornare ac libero et, interdum rhoncus leo.
                        </p>
                        <p>
                            Email: <a href="mailto:ddunne6@tcd.ie"><u>ddunne6@tcd.ie</u></a>
                        </p>
                        <div>
                            <Button variant="outline-info" style={{ marginRight: "1em" }}>Contact Me</Button>{' '}
                            <a href="https://www.linkedin.com/in/david-dunne-b02642195/"><Icon.Linkedin className='Socials' size={25} /></a>
                            <a href="https://www.instagram.com/dunned922/?hl=en"><Icon.Instagram className='Socials' size={25} /></a>
                            <a href="https://github.com/ddunne6"><Icon.Github className='Socials' size={25} /></a>
                        </div>
                    </Col>
                    <Col style={{ marginTop: "1em" }}>
                        <Row>
                            <Col>
                                <div style={{ textAlign: "center" }}>
                                    <Icon.Diagram3 size={60} />
                                    <h5>Distributed Systems</h5>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ textAlign: "center" }}>
                                    <Icon.Chat size={60} />
                                    <h5>Machine Translation Evaluation</h5>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ textAlign: "center" }}>
                                    <Icon.Map size={60} />
                                    <h5>Geospatial Data</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{ textAlign: "center" }}>
                                    <Icon.Robot size={60} />
                                    <h5>Machine Learning</h5>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ textAlign: "center" }}>
                                    <Icon.Clouds size={60} />
                                    <h5>Internet Applications</h5>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DunnedevAboutMe;