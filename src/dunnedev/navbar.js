// import './styles/colors.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function DunnedevNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{textAlign: 'center'}}>
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Brand href="#home" className="justify-content-start" style={{ width: "100%", marginRight: "0px", textAlign: "left" }}>dunnedev</Navbar.Brand>
                    <Nav className="justify-content-center" style={{ width: "100%" }}>
                        <Nav.Link href="#david" className='px-4'>David</Nav.Link>
                        <Nav.Link href="#experience" className='px-4'>Experience</Nav.Link>
                        <Nav.Link href="#about" className='px-4'>About</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Button href="mailto:ddunne6@tcd.ie" variant="outline-info">Contact Me</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DunnedevNavbar;
