import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/experience.scss'

function DunnedevExperienceCell(props) {
    const startDate = new Date(props.startYear, props.startMonth)
    var endDate = new Date()
    if (props.endYear !== -1 && props.endMonth !== -1) {
        endDate = new Date(props.endYear, props.endMonth)
    } 
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
                        {datesAndTenure(startDate, endDate)}
                    </p>
                </Col>
            </Row>
        </div>
    );
}

function datesAndTenure(startDate, endDate) {
    const months = monthDiff(startDate, endDate)
    return startDate.toLocaleString('default', { month: 'long' }) + " " + startDate.getFullYear() + " - " + endDate.toLocaleString('default', { month: 'long' }) + " " + endDate.getFullYear() + " (" + Math.floor(months / 12) + " years " + (months % 12) + " months" + ")"
}

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months+2;
}

export default DunnedevExperienceCell;