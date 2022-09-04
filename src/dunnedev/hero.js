import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

import '../styles/hero.scss'

function DunnedevHero() {
    return (
        <Container id='david'>
            <Row>
                <Col md={7} lg={8} xl={9}>
                    <h1>&lt;Hi! I am<br />David Dunne&gt;</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus condimentum mi a eleifend. Nullam quis sem nec magna laoreet laoreet. Cras non sagittis diam. Cras ultrices sodales neque eget posuere. Vivamus congue dolor odio, ac ultricies augue malesuada vel.
                    </p>
                    <div>
                        <Button variant="outline-info" style={{marginRight: "1em"}}>Contact Me</Button>{' '}
                        <a href="https://www.linkedin.com/in/david-dunne-b02642195/"><Icon.Linkedin className='Socials' size={25}/></a>
                        <a href="https://www.instagram.com/dunned922/?hl=en"><Icon.Instagram className='Socials' size={25}/></a>
                        <a href="https://github.com/ddunne6"><Icon.Github className='Socials' size={25}/></a>
                    </div>
                    <br />
                </Col>
                <Col>
                    <img src='/david_bristol.jpg' className='Profile' alt=''/>
                </Col>
            </Row>
        </Container>
    );
}

export default DunnedevHero;