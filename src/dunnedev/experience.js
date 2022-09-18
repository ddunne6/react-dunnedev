import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DunnedevExperienceCell from './experienceCell'

import '../styles/experience.scss'

let myEducation = `My keen interest in Computer Engineering led me to specialising in this area during the third year of my studies at Trinity College Dublin.
As part of my Master's degree, I wrote a dissertation on the topic of Machine Translation Evaluation in which I achieved a distinction.
`

let myExperience = `
During my time at university, I completed a Software Engineering internship at LexisNexis Risk Solutions.
I now work at Amazon in the AWS CloudWatch Metrics department.
`

function DunnedevExperience() {
    return (
        <Container id='experience' style={{ marginTop: "1em" }}>
            <Row>
                <Col md>
                    <h1 className="workExperience">My Work Experience</h1>
                    <p>
                        {myEducation}
                    </p>
                    <p>
                        {myExperience}
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