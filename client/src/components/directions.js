import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Directions =()=>{

    return(
        <Row>
            <Col>
            <h3> Search Criteria</h3>
                <ul>
                    <li>Dates use the Format YYYY-MM-DD "-" must be included</li>
                    <lil>Date Range can be no longer than 7 days</lil>
                </ul>
            </Col>
        </Row>
    )
}
export default Directions