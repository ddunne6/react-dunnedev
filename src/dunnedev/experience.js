import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DunnedevExperienceCell from './experienceCell'

import '../styles/experience.scss'

function DunnedevExperience() {
    return (
        <Container id='experience' style={{ marginTop: "1em" }}>
            <Row>
                <Col md>
                    <h1 className="workExperience">My Work Experience</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius vitae elit pharetra congue. Aenean sollicitudin aliquam turpis, at gravida orci porta ut. Nulla nulla massa, ornare ac libero et, interdum rhoncus leo.
                    </p>
                </Col>
                <Col md>
                    <DunnedevExperienceCell num="01/" jobTitle="Software Development Engineer" company="Amazon Web Services" start="June 2022" end="Present" />
                    <DunnedevExperienceCell num="02/" jobTitle="Software Engineer Intern" company="LexisNexis Risk Solutions" start="February 2021" end="August 2021" />
                    <DunnedevExperienceCell num="03/" jobTitle="Computer Engineer Student (B.A., M.A.I.)" company="Trinity College Dublin" start="September 2017" end="May 2022" />
                </Col>
            </Row>
        </Container>
    );
}

export default DunnedevExperience;