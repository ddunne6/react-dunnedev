import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

import '../styles/hero.scss'

let mySummary1 = `Software Engineer with a passion for coding, designing, and developing complex distributed systems.
After completing my Master's degree in Computer Engineering at Trinity, where I graduated with a distinction, I began my career as a Software Engineer on the CloudWatch team at Amazon Web Services.
I now develop payment method integrations at Stripe on the EMEA Wallets team.`

let mySummary2 = `
My areas of interest include: Machine Learning, Distributed Systems, Payment Processing, Monitoring, and Machine Translation Evaluation.`

function DunnedevHero() {
    return (
        <Container id='david'>
            <Row>
                <Col md={7} lg={8} xl={9}>
                    <h1>&lt;Hi! I am<br />David Dunne&gt;</h1>
                    <p>
                        {mySummary1}
                    </p>
                    <p>
                        {mySummary2}
                    </p>
                    <div>
                        <Button variant="outline-info" href="mailto:david@dunnedev.ie" style={{marginRight: "1em"}}>Contact Me</Button>{' '}
                        <a href="https://www.linkedin.com/in/david-dunne-b02642195/"><Icon.Linkedin className='Socials' size={25}/></a>
                        <a href="https://www.instagram.com/dunnedev"><Icon.Instagram className='Socials' size={25}/></a>
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