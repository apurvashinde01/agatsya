import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import error404 from "../static/images/404.svg";

function NoRoute404() {
    return (
        <>
            <Row className='center_content'>
                    <Image               
                        height={'500em'}
                        src={error404} />
            </Row>
        </>
    )
}

export default NoRoute404