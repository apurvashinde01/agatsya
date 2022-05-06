import React, { useState } from 'react'
import { Row, Button, Badge } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function BlogView() {

    return (
        <>
            <Row className='mt-1 mb-3'  >

                {/* <Image
                    height={'380em'}
                    src="https://images.unsplash.com/photo-1594712844257-f20c563fe5de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                 */}

                <h4><Badge bg="secondary"> New!</Badge> May 1, 2022</h4>
                <h1>
                    <a
                     id='title_link'
                     className='Fraunces_font unlink font_black'>Google Font Pairings</a>
                </h1>
                <h5>By @Username</h5>
                <p>Browse through hundreds of free Google Font pairings to use for your next creative project. Also, don't forget to subscribe to our newsletter for more type inspiration!</p>
               <hr/>
            </Row>
        </>
    )
}

export default BlogView