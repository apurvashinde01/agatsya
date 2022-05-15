import React from 'react'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

function Settings() {

  // fetch login session data
  const login_session = useSelector(state => state.login_session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch({ type: "SIGNOUT_USER", user: login_session });
    navigate('/signout');
  }

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
              action
              onClick={() => handleSignOut()}
            >
              SignOut
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default Settings