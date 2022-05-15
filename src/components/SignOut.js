import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import signout from "../static/images/signout.svg";

function SignOut() {

    const navigate = useNavigate();

    const directToSignIn = () => {
        navigate('/signin');
    }

    return (
        <>
            <Row className='center_content'>
                <h2>Sad to see you go</h2>
                <Image
                    height={'400em'}
                    src={signout} />

                <div class="row justify-content-center">
                    <div className='col-4 '>
                        <Button
                            onClick={() => directToSignIn()}
                            size="lg"
                            className='mt-2' variant="outline-dark" id="hot_pink_btn">SignIn Again!</Button>
                    </div>
                </div>
            </Row>
        </>
    )
}

export default SignOut