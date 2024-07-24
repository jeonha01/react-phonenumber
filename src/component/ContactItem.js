import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = () => {
    return (
        <Row>
            <Col lg={1}>
                <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"></img>
            </Col>
            <Col lg={11}>
                <div>
                    강전하
                </div>
                <div>
                    01012345567
                </div>
            </Col>
        </Row>
    )
}

export default ContactItem