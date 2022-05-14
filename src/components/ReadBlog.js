import React, { useState } from 'react'
import {
    ListGroup, ListGroupItem, Row, Col, Image, Button, ButtonGroup, Container
    , FormControl, InputGroup, Modal
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import cupcake_jpg from "../static/images/heaven-delight.jpg";
import newsletter from "../static/images/newsletter.svg";


function ReadBlog() {

    // fetch id of blog from url
    const id = useParams().blog_id;
    // console.log(id);
    // dispatch obj creation
    const dispatch = useDispatch();
    // fetch all blogs from store
    const blogs = useSelector(state => state.blogs);
    // find blog requested based on id
    const blog = blogs.find(blog => blog.index == id);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row className='center_content'>
                <Col>
                    <Image
                        className='mb-4 img_responsive'
                        src={cupcake_jpg} />

                    <h4>{blog.date}</h4>
                    <h1>{blog.title}</h1>
                    <h5>By @{blog.author}</h5>
                    <br />
                    <Row>
                        <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                        </Col>

                        <Col >
                            <p className='justify_content'>
                                {blog.content}
                            </p>
                        </Col>

                        {
                            blog.status == 'drafts' ? (
                                <>
                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                    </Col>

                                    <div className='center_content'>
                                        <ButtonGroup className='center_content' >

                                            {/* <Link className='unlink' to={'/edit/' + blog.index}> */}
                                            <Button variant="outline-dark"
                                            >Edit</Button>
                                            {/* </Link> */}

                                            {/* <Link className='unlink' to={'/publish/' + blog.index}> */}
                                            <Button variant="outline-dark"
                                                id="hot_pink_btn"
                                            >Publish</Button>
                                            {/* </Link> */}

                                            {/* <Link className='unlink' to={'/delete/' + blog.index}> */}
                                            <Button variant="outline-dark"
                                                onClick={handleShow}
                                            >Delete</Button>
                                            {/* </Link> */}

                                        </ButtonGroup>
                                    </div>

                                </>

                            ) : (
                                <>
                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>

                                        <ListGroup className='list-group-flush'>
                                            <ListGroup.Item className='bg-transparent'>
                                                {blog.likes}
                                                <img
                                                    height={'40em'}
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADqklEQVRoge3ZTYhWVRzH8c84M6A0OSlEZZaLjMFeyByL3qhFiBvNIqXcRIswjKJdLSsscFtMr1RQCW3SghZlVtAmekGKQo0WlWlBlC9l6hTOPC3OOd1bTDP33rnPfZ7g+cLlzJznf/7n97/nnHvP+V969OjRo0cH6CthO4KbsQrn4jwM4DD24AO8hq8K+luG9bgeF2MhTuEADmIX3sDXJTROy0q8h1aBaxJvY/k0/i6PNpMFfb6L0dkEMIixXIeH8DxuEkbnNMwVRmYtnhZGpyXc2UfQn/PXj0fjb8nfU1gTfcyNPkewDi9Em3SDnhBmQCkW4P3o5Di2YH6BdqfjYYzHti/HAPqxLdaN46FoOxPzheBPyEbnjKJBDOaC+F6YCmVZjv3RxzZZEN/hsgr+RoW1k4IpNDJjsiAWVeg0sST6SHN9P86fhb9FsmAen8l4pTAfj6s2Ev9mVJhK41hRg78VwjSbmMlfejptqaHTxAPxqovHBI27/stgRPY0KbKwi5IWe10My56OF6bKOTmDW2L5On6rseOJeNXFr8KLkvCCxj8DuTGWb9bYabtIGlelinwgS2K5pzE51dkbyymfgseEeTfUmJzqDAlaj6WK/IikBXmqSUUVmYzl3/rzgRyJ5cLG5FQnaTycKvKB/BLLcxqTU52k8VCqyAfyRSyvaExOda6M5eepIh/Ix7G8ujE51bkqlp9M9eMy4UlwRDgbdCvzhJdiS9iNTMnuaLChIVFVuF3QOOVoJO6LRruVO883RR8+EzRuns5wHn6Mhre2X1dp1gvaDiow/e+NxgeEnWa3MCwE0MI9RRoM4NPY4MX26SrNS4Kmj5Q4FlwqSyDc3R5dpdgsaDmJi8o2vis2/kNuu9wBVkcNLdxZ1UlKRPyOa+rRVYrrhPxBoYTDdPTjVVkwTY7MDcJJtSWkYmd9XB4UjpZpjm6crcMCbIx9tbA9aqiFfiGFmXJUz6qQvizYz1ZZmvaVdvTTJ6RDJ2Inbwmp1bpYgJ3R94SQVm3r7mItjsYOv1HPbvlafCvbtK6pwWchluJLWeZ9q2rzeAAP4s/oa5+wC2+UITwnWzcf4oIS7ZfGNumzwTPCZ4WOsRo/REEnhDs8Zxr7PmySZW1+Er65dAVnYodsdHZi8RR2i/FOzm57bNt1bMDPgsijuC332zohwZEW9KbG1ZXkbCF/nO76GJ7M/b8DZ3VMXQXuELY1KYCTuL+jimbBJUKedm/8+3/NsO46afZohL8AQdD5tJ4fnIQAAAAASUVORK5CYII=" />

                                            </ListGroup.Item>
                                            <ListGroup.Item className='bg-transparent'>
                                                {blog.saves}
                                                <img
                                                    height={'40em'}
                                                    src="https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png" />
                                            </ListGroup.Item>
                                            <ListGroup.Item className='bg-transparent'>
                                                {blog.shares}
                                                <img
                                                    height={'40em'}
                                                    src="https://img.icons8.com/ios-glyphs/50/000000/share-3.png" />
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
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
                                            <p id="newsletter_block">Sign up to catchup the trending blogs each weekend, straight to your mailbox!</p>
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
                    <Modal.Title  id="popup_part">Delete Draft</Modal.Title>
                </Modal.Header>
                <Modal.Body  id="popup_part">Are you sure you wish to delete this draft?</Modal.Body>
                <Modal.Footer id="popup_part">
                    <Button variant="outline-dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <br />
        </>
    )
}

export default ReadBlog