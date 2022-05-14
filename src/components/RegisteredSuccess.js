import React from 'react'
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import reg_success from "../static/images/reg_success.gif";

function RegisteredSuccess() {
    return (
        <>
            <div className='center_content'>
                <h1>You've signed up for awesomeness!</h1>
                <Image
                    height={'250em'} src={reg_success} />

                <br />
                <Link to='/signin'>
                    <Button
                        size="lg"
                        className='mt-2' variant="outline-dark" id="blue_btn">SignIn</Button>
                </Link>
            </div>

        </>
    )
}

export default RegisteredSuccess