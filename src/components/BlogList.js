import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogView from './BlogView';

function BlogList() {
  return (
    <>
      <Row>
        <Col xl={2} lg={2} md={1} sm={1} xs={1} >
        </Col>

        <Col>
          <BlogView />
          <BlogView />
          <BlogView />
        </Col>

        <Col xl={2} lg={2} md={1} sm={1} xs={1} >
        </Col>
      </Row>
    </>
  )
}

export default BlogList