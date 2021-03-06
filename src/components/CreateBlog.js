import React, { useState } from 'react'
import { Image, Row, Button, Form, ButtonGroup, Col, FloatingLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import upload from "../static/images/upload.svg";
import write_blog from "../static/images/write_blog.svg";

function CreateBlog() {
    // fetch login session data
    const login_session = useSelector(state => state.login_session);

    // dispatch obj creation
    const dispatch = useDispatch();

    // fetch all blogs from store
    const blogs = useSelector(state => state.blogs);
    // console.log(blogs)

    // take blog 1 as ref.
    const blog = blogs.find(blog => blog.index == 1);
    const new_index = blogs.length + 1;

    const [Content, setContent] = useState('')
    const [Title, setTitle] = useState('')
    const [ImageInput, setImageInput] = useState('')

    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

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
            case 'image':
                const image = event.target.files[0];
                // console.log(image)
                if (image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                    // console.log('valid image.');
                    setImageInput({ value: event.target.files[0] });
                    return false;
                }

                break;
            default:
                break;
        }
    }

    const onSubmit = (status, data) => {
        // console.log(status, data)
        // console.log("ooooooooooooooo", blog, new_index);

        const create_blog = {};
        create_blog.index = new_index;
        create_blog.author = login_session.username;
        create_blog.status = status;
        create_blog.saves = 0;
        create_blog.likes = 0;
        create_blog.shares = 0;

        if (typeof Title.value !== "undefined") {
            create_blog.title = Title.value;
        }

        if (typeof Content.value !== "undefined") {
            create_blog.content = Content.value;
        }

        // console.log("dddddddddddd", create_blog);
        // console.log('ooooooooooooo', blog)
        // console.log(blogs)
        dispatch({ type: "CREATE_BLOG", blog: create_blog });
        // console.log(blogs)
        navigate('/read/' + new_index);
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

                    <Form className='mb-4'
                    // onSubmit={handleSubmit(onSubmit)}
                    >
                        <Row>
                            <Col>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    id="title"
                                    className='transparent-input'
                                    placeholder="Enter Title here"
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
                                    style={{ height: '50em' }}
                                    {...register("content", { required: true })}
                                    onChange={handleChange}
                                />
                                <p className='validation_error'>{errors.content?.type === 'required' && "Content is required"}</p>

                            </Col>
                        </Row>

                        {/* <Form.Label>Image</Form.Label>
                        <Form.Group variant="outline-dark" className="mb-3">
                            <Form.Control
                                id="image"
                                {...register("image")}
                                type="file" className='transparent-input'
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <p className='validation_error'>{errors.image?.type === 'required' && "Image is required"}</p> */}

                        <ButtonGroup>
                            <Button
                                name="drafts"
                                onClick={() => onSubmit("drafts")}
                                variant="outline-dark">Save Draft</Button>
                            <Button
                                name="published"
                                onClick={() => onSubmit("published")}
                                variant="outline-dark" id="hot_pink_btn">Publish Blog!</Button>
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

export default CreateBlog