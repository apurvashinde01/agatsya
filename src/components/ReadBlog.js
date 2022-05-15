import React, { useState } from 'react'
import {
    ListGroup, ListGroupItem, Row, Col, Image, Button, ButtonGroup, Container
    , FormControl, InputGroup, Modal
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import cupcake_jpg from "../static/images/heaven-delight.jpg";
import newsletter from "../static/images/newsletter.svg";
import ActivityPanel from './ActivityPanel';
import protected_route from "../static/images/protected_route.gif";

function ReadBlog() {
    // fetch login session data
    const login_session = useSelector(state => state.login_session);
    // console.log(login_session);

    // fetch id of blog from url
    const id = useParams().blog_id;
    // dispatch obj creation
    const dispatch = useDispatch();
    // fetch all blogs from store
    const blogs = useSelector(state => state.blogs);
    // // console.log(blogs)

    // find blog requested based on id
    const blog = blogs.find(blog => blog.index == id);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const handleEditBlog = () => {
        navigate('/edit/' + blog.index);
    }

    const handleDeleteBlog = (blog_id) => {
        dispatch({ type: "DELETE_BLOG", blog_id: blog_id });
        navigate('/myblogs')
    }

    const handlePublishBlog = () => {
        var edited_blog = blog;

        edited_blog.likes = 0;
        edited_blog.saves = 0;
        edited_blog.status = 'published';
        dispatch({ type: "EDIT_BLOG", blog: edited_blog });
        navigate('/read/' + blog.index);
    }

    const directToSignIn = () => {
        navigate('/signin');
    }

    return (
        <>
            {
                login_session.logged_in == true ? (
                    <>
                        <Row className='center_content'>
                            <Col>
                                <Image
                                    className='mb-4 img_responsive border_div'
                                    src={blog.img}
                                />

                                <h4>{blog.date}</h4>
                                <h1>{blog.title}</h1>
                                <h5>By @{blog.author}</h5>
                                <br />
                                <Row>
                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                    </Col>

                                    <Col className='col-8 justify-content-center'>
                                        <p className='justify_content'>
                                            {blog.content}
                                        </p>
                                    </Col>

                                    {
                                        // check if blog belongs to signed in user
                                        (blog.author).toString().localeCompare(login_session.username.toString()) == 0

                                            &&

                                            // check if blog is a draft
                                            blog.status.toString().localeCompare('drafts'.toString()) == 0

                                            ? (
                                                <>
                                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                                    </Col>

                                                    <div className='center_content'>
                                                        <ButtonGroup className='center_content' >

                                                            <Button variant="outline-dark"
                                                                onClick={() => handleEditBlog()}

                                                            >Edit</Button>

                                                            <Button variant="outline-dark"
                                                                id="hot_pink_btn"
                                                                onClick={() => handlePublishBlog()}
                                                            >Publish</Button>

                                                            <Button variant="outline-dark"
                                                                onClick={handleShow}
                                                            >Delete</Button>

                                                        </ButtonGroup>
                                                    </div>

                                                </>

                                            ) : (
                                                <>
                                                    <ActivityPanel blog={blog} />
                                                </>
                                            )
                                    }

                                </Row >

                                <br />

                                <Row >
                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                    </Col>

                                    <Col >
                                        <Container  >
                                            <Row>
                                                <Col>
                                                    <Row
                                                        id="newsletter_block"
                                                        className='rounded_border'
                                                    >

                                                        <Image
                                                            id="newsletter_block"
                                                            height={'200em'}
                                                            className="mt-3 mb-1"
                                                            src={newsletter} />

                                                        <h3 id="newsletter_block">More of similar blogs?</h3>
                                                        <p id="newsletter_block">Subscribe for blogs from @ {blog.author} !</p>
                                                        <Col
                                                            id="newsletter_block"
                                                            xl={3} lg={3} md={3} sm={3} xs={3}></Col>
                                                        <Col
                                                            id="newsletter_block"
                                                            lg={6} md={6}>
                                                            <InputGroup
                                                                //  size='sm'
                                                                width={'10em'}
                                                                className="mb-4"

                                                                id="newsletter_block">
                                                                <FormControl
                                                                    placeholder="Email address please"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2"
                                                                />
                                                                <Button
                                                                    id="hot_pink_btn"
                                                                    variant="outline-dark">
                                                                    Signup
                                                                </Button>
                                                            </InputGroup>
                                                        </Col>
                                                        <Col
                                                            id="newsletter_block"
                                                            xl={3} lg={3} md={3} sm={3} xs={3}></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>

                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                    </Col>
                                </Row>

                            </Col >
                        </Row >


                        <Modal
                            id="popup"
                            className='modal-backdrop'
                            show={show} onHide={handleClose}>
                            <Modal.Header closeButton
                                id="popup_part"
                            >
                                <Modal.Title id="popup_part">Delete Draft</Modal.Title>
                            </Modal.Header>
                            <Modal.Body id="popup_part">Are you sure you wish to delete this draft?</Modal.Body>
                            <Modal.Footer id="popup_part">
                                <Button variant="outline-dark" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="danger" onClick={() => handleDeleteBlog(blog.index)}>
                                    Yes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <br />
                    </>) : (
                    <>
                        <Row className='center_content justify-content-center'>
                            <Col xl={1} lg={1} md={1} sm={1} xs={1} >
                            </Col>

                            <Col>
                                <h3>Signin to keep reading blogs!</h3>
                                <Image
                                    width={'450em'}
                                    src={protected_route} />
                                <br />

                                <Button
                                    onClick={() => directToSignIn()}
                                    size="lg"
                                    className='mt-2' variant="outline-dark" id="hot_pink_btn">SignIn</Button>


                            </Col>

                            <Col xl={1} lg={1} md={1} sm={1} xs={1} >
                            </Col>

                        </Row>
                        <br />
                    </>
                )
            }
        </>
    )
}

export default ReadBlog