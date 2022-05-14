import React, { useState } from 'react'
import { Col, Image, Row, ButtonGroup, Button, Alert, Offcanvas } from 'react-bootstrap';
import signin from "../static/images/signin.svg";
import './signup.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SignIn() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signinError, setsigninError] = useState('');
    const [showsigninError, setshowsigninError] = useState(false);
    const [signinSuccess, setsigninSuccess] = useState();

    // fetch all users from store
    const users = useSelector(state => state.users);

    const navigate = useNavigate();

    const onSubmit = (data) => {

        var user_email = data.email;
        var user_pwd = data.Password;
        var bool_signinsuccess;

        console.log(user_email, user_pwd);

        for (let index = 0; index < users.length; index++) {
            const element = users[index];
            console.log(element);

            if ((element.email.toString()).localeCompare(user_email.toString()) == 0) {
                console.log('email found')
                if ((element.pwd.toString()).localeCompare(user_pwd.toString()) == 0) {
                    console.log('pwd matched')
                    setsigninSuccess(true);
                    setshowsigninError(false);
                    bool_signinsuccess = true;
                    break;
                }
            }
        }

        if (!bool_signinsuccess) {
            setsigninError("SignIn failed!");
            setshowsigninError(true);
            setsigninSuccess(false);
        }

    }

    return (
        <>
            <Row className='center_content'>
                <Col>
                    <Image
                        height={'300em'} src={signin} />

                    <div class="row justify-content-center">
                        <div className='col-4 '>
                            {showsigninError &&
                                <Alert variant="danger" onClose={() => setshowsigninError(false)} dismissible>
                                    {
                                        signinError
                                    }
                                </Alert>
                            }
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div className='col-4 '>
                            {signinSuccess &&
                                <Alert variant="info" onClose={() => setsigninSuccess(false)} dismissible>
                                    SignIn successful
                                </Alert>
                            }
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <h1>Email</h1>
                        <input type='email' 
                        className='input_field' {...register("email", { required: true })} />

                        <h1>Password</h1>
                        <input type='Password' className='input_field' {...register("Password", {
                            required: true,
                        })} />

                        <br />
                        <Button
                            type='submit'
                            size="lg"
                            className='mt-2' variant="outline-dark" id="hot_pink_btn">SignIn</Button>

                    </form>

                    <br />
                </Col>
            </Row>
        </>
    )
}

export default SignIn