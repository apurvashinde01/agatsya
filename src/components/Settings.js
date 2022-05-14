import React from 'react'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap'

function Settings() {
  return (
    <>
      <Row className='justify-content-center'>
        <Col 
        lg={5} xl={5}
        className='text-center'>
          <ListGroup
            defaultActiveKey="#link1" variant="flush">
            <ListGroup.Item
              id='transparent_list_item'
              variant="light"
              action href="#link1">
              Profile
            </ListGroup.Item>
            <ListGroup.Item
              id='transparent_list_item'
              variant="light"
              action href="#link2">
              Bookmarks
            </ListGroup.Item>
            <ListGroup.Item
              id='transparent_list_item'
              variant="light"
              action href="#link3">
              Change Password
            </ListGroup.Item>
            <ListGroup.Item
              id='transparent_list_item'
              variant="light"
              action href="#link4">
              SignOut
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default Settings