import React, { useState } from 'react'
import {
    ListGroup, ListGroupItem, Row, Col, Image, Button, ButtonGroup, Container
    , FormControl, InputGroup, Modal, Form
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import write_blog from "../static/images/write_blog.svg";

function EditBlog() {

    // fetch id of blog from url
    const id = useParams().blog_id;
    // dispatch obj creation
    const dispatch = useDispatch();
    // fetch all blogs from store
    const blogs = useSelector(state => state.blogs);
    // find blog requested based on id
    const blog = blogs.find(blog => blog.index == id);
    const [Content, setContent] = useState('');
    const [Title, setTitle] = useState('')

    const navigate = useNavigate();

    const handleChange = (event) => {
        // console.log(event.target);
        // console.log(Title);
        // console.log(Content);

        switch (event.target.id) {
            case 'title':
                setTitle({ value: event.target.value });
                break;
            case 'content':
                setContent({ value: event.target.value });
                break;
            default:
                break;
        }
    }

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {

        var edited_blog = blog;
        if (typeof Title.value !== "undefined") {
            edited_blog.title = Title.value;
        }

        if (typeof Content.value !== "undefined") {
            edited_blog.content = Content.value;
        }

        dispatch({ type: "EDIT_BLOG", blog: edited_blog });
        navigate('/read/' + blog.index);
    }

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

                    <Form className='mb-4' onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <Form.Label>Title</Form.Label>

                                <Form.Control
                                    id="title"
                                    className='transparent-input'
                                    defaultValue={blog.title}
                                    placeholder="Edit Title here"
                                    {...register("title", {
                                        required: true,
                                    })}
                                    onChange={handleChange}
                                />
                                <p className='validation_error'>{errors.title?.type === 'required' && "Title is required"}</p>

                                <br />

                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    id="content"
                                    as="textarea"
                                    className='transparent-input'
                                    placeholder="Edit content here"
                                    defaultValue={blog.content}
                                    style={{ height: '50em' }}
                                    {...register("content", { required: true })}
                                    onChange={handleChange}
                                />
                                <p className='validation_error'>{errors.content?.type === 'required' && "Content is required"}</p>

                            </Col>
                        </Row>

                        {/* <Form.Label>Image</Form.Label>
                        <Form.Group variant="outline-dark" controlId="formFile" className="mb-3">
                            <Form.Control
                                {...register("image")}
                                type="file" className='transparent-input' />
                        </Form.Group>
                        <p className='validation_error'>{errors.image?.type === 'required' && "Image is required"}</p> */}

                        <ButtonGroup>
                            <Button
                                type='submit'
                                variant="outline-dark">Save Draft</Button>
                            <Button variant="outline-dark" id="hot_pink_btn">Publish Blog!</Button>
                        </ButtonGroup>

                    </Form>
                </Col>

                <Col
                    xl={1} lg={1} md={1} sm={1} xs={1}
                ></Col>
            </Row>
            <br />
        </>
    )
}

export default EditBlog