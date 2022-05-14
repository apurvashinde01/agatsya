import React from 'react'
import { Image, Row, Button, Form, ButtonGroup, Col, FloatingLabel } from 'react-bootstrap';
import upload from "../static/images/upload.svg";
import write_blog from "../static/images/write_blog.svg";

function CreateBlog() {
    return (
        <>
            <Row className="center_content">
                <Col
                    xl={1} lg={1} md={1} sm={1} xs={1}
                ></Col>

                <Col>
                    <Image
                        height={'300em'}
                        src={write_blog} />

                    <Form className='mb-4'>
                        <Row>
                            <Col>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    className='transparent-input'
                                    placeholder="Title here" />
                                <br />
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    className='transparent-input'
                                    placeholder="Enter content here"
                                    style={{ height: '50em' }}
                                />
                            </Col>
                        </Row>
                    </Form>

                    <Form.Label>Image</Form.Label>
                    <Form.Group variant="outline-dark" controlId="formFile" className="mb-3">
                        <Form.Control type="file" className='transparent-input' />
                    </Form.Group>

                    <ButtonGroup>
                        <Button variant="outline-dark">Save Draft</Button>
                        <Button variant="outline-dark" id="hot_pink_btn">Publish Blog!</Button>
                    </ButtonGroup>
                </Col>

                <Col
                    xl={1} lg={1} md={1} sm={1} xs={1}
                ></Col>
            </Row>
            <br />
        </>
    )
}

export default CreateBlog