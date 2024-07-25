import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({ item }) => {
    return (
        <Row className='contactItem'>
            <Col lg={2}>
                <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" alt="Description of image"></img>
            </Col>
            <Col lg={10}>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.phoneNumber}
                </div>
            </Col>
        </Row>
    )
}

export default ContactItem