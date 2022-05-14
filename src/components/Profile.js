import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import profile from "../static/images/profile.png";
import BlogList from './BlogList';

function Profile() {
    return (
        <>
            <Row 
            className='mt-2 center_content'
            >
                <Col
                    className='border_div'
                    xl={5} lg={4} md={12} sm={12} xs={12}
                >
                    <Image
                        height={'200em'}
                        src={profile}
                    />
                </Col>

                <Col
                    xl={7} lg={7} md={12} sm={12} xs={12}
                >
                    <h1>@Username</h1>
                    <h5>Blogs published: 67</h5>
                    <h5>Likes received: 867</h5>
                </Col>
            </Row>
            {/* <hr/> */}

            <Row 
            className='mt-3'
            >
                {/* <h2 className='center_content'>@Username's Blogs</h2> */}
                <BlogList />

            </Row>
        </>
    )
}

export default Profile