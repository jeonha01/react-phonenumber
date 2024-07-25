import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()
    const { contact } = useSelector((state) => state)
    const searchContact = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_CONTACT", payload: { keyword } })
    }
    return (
        <Form onSubmit={searchContact}>
            <Row>
                <Col lg={10}>
                    <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setKeyword(event.target.value)} />
                </Col>
                <Col lg={2}>
                    <Button className="search-button" type='submit'>찾기</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox