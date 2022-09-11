import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/experience.scss'

function DunnedevExperienceCell(props) {
    return (
        <div>
            <hr />
            <Row>
                <Col xs={2}>
                    <h5 style={{marginTop: "0.25em"}}>{props.num}</h5>
                </Col>
                <Col>
                    <h2>
                        {props.jobTitle}
                    </h2>
                    <h4>
                        {props.company}
                    </h4>
                    <p>
                        {props.start}-{props.end}
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default DunnedevExperienceCell;