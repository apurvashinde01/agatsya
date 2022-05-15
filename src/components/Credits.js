import React from 'react'
import { Col, Container, FormControl, Image, Button, InputGroup, Row } from 'react-bootstrap'

function Credits() {
    return (
        <>
            <Row className='center_content' >
                <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                </Col>

                <Col >
                    <Container  >
                        <Row>
                            <Col>
                                <Row
                                    id="newsletter_block"
                                    className='rounded_border pt-3'
                                >

                                    {/* <Image
                                        id="newsletter_block"
                                        height={'200em'}
                                        className="mt-3 mb-1"
                                        src={newsletter} /> */}

                                    {/* <h3 id="newsletter_block">Credits</h3> */}
                                    {/* <h5
                                       
                                        id="newsletter_block">Icons and Images for from <a id="newsletter_block" href='https://icons8.com/icons'>Icons8</a></h5> */}

                                    <br />

                                    <h5 id="newsletter_block">Made with 💗 by
                                        <a className='unlink' id="newsletter_block" href='https://github.com/apurvashinde01'> Apurva</a></h5>

                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>

                <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                </Col>
            </Row>

        </>
    )
}

export default Credits