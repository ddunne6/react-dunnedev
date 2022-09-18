import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

import '../styles/skills.scss'

function DunnedevAboutMe() {
    return (
        <div className="aboutMeFrame">
            <Container id='about' className="aboutMeContent">
                <Row>
                    <Col md lg={3}>
                        <img src='/david_bristol.jpg' className='Profile' alt='' />
                    </Col>
                    <Col md lg={8}>
                        <h1>About Me</h1>
                        <p>
                            Here are some of my socials if you want to reach out to me. You can also email me directly.</p>
                        <p>
                            Email: <a href="mailto:ddunne6@tcd.ie"><u>ddunne6@tcd.ie</u></a>
                        </p>
                        <div>
                            <Button variant="outline-info" href="mailto:ddunne6@tcd.ie" style={{ marginRight: "1em" }}>Contact Me</Button>{' '}
                            <a href="https://www.linkedin.com/in/david-dunne-b02642195/"><Icon.Linkedin className='Socials' size={25} /></a>
                            <a href="https://www.instagram.com/dunned922/?hl=en"><Icon.Instagram className='Socials' size={25} /></a>
                            <a href="https://github.com/ddunne6"><Icon.Github className='Socials' size={25} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DunnedevAboutMe;