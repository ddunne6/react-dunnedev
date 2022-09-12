import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import * as Icon from 'react-bootstrap-icons';

import '../styles/aboutMe.scss'

function DunnedevSkills() {
    return (
        <Container>
            <div className='skillsFrame'>
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
            </div>
        </Container>
    );
}

export default DunnedevSkills;