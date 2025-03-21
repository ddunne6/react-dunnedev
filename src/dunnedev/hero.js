import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

import '../styles/hero.scss'

let mySummary = `Software Engineer with a passion for coding, designing and developing complicated distributed systems. 
Having recently graduated with a distinction for my master's degree in Computer Engineering at Trinity College Dublin, 
I now work at Stripe in the EMEA Wallets department. 
My areas of interest include: Distributed Systems, Machine Translation Evaluation, Geospatial Data, Machine Learning and Internet Applications.`

function DunnedevHero() {
    return (
        <Container id='david'>
            <Row>
                <Col md={7} lg={8} xl={9}>
                    <h1>&lt;Hi! I am<br />David Dunne&gt;</h1>
                    <p>
                        {mySummary}
                    </p>
                    <div>
                        <Button variant="outline-info" href="mailto:david@dunnedev.ie" style={{marginRight: "1em"}}>Contact Me</Button>{' '}
                        <a href="https://www.linkedin.com/in/david-dunne-b02642195/"><Icon.Linkedin className='Socials' size={25}/></a>
                        <a href="https://www.instagram.com/dunned922/?hl=en"><Icon.Instagram className='Socials' size={25}/></a>
                        <a href="https://github.com/ddunne6"><Icon.Github className='Socials' size={25}/></a>
                    </div>
                    <br />
                </Col>
                <Col>
                    <img src='/david_liverpool.jpg' className='Profile' alt=''/>
                </Col>
            </Row>
        </Container>
    );
}

export default DunnedevHero;