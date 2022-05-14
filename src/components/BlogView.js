import React, { useState } from 'react'
import { Row, Button, Badge } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function BlogView({ blog }) {

    return (
        <>
            <Row className='mt-1 mb-3'  >

                {/* <Image
                    height={'380em'}
                    src="https://images.unsplash.com/photo-1594712844257-f20c563fe5de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                 */}

                <h4><Badge bg="secondary"> New!</Badge> {blog.date}</h4>
                <h1>
                    <Link className='unlink' to={'/read/' + blog.index}>
                        <a
                            id='title_link'
                            className='Fraunces_font unlink font_black'>{blog.title}</a>
                    </Link>
                </h1>
                <h5>By @{blog.author}</h5>
                <p>{blog.desc}</p>
                <hr />
            </Row>
        </>
    )
}

export default BlogView