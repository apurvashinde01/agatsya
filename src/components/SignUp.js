import React, { useState } from 'react'
import { Col, Image, Row, ButtonGroup, Button, Alert } from 'react-bootstrap';
import signup from "../static/images/signup.svg";
import './signup.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function SignUp() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signupError, setsignupError] = useState('');
    const [showsignupError, setshowsignupError] = useState(false);

    // fetch all users from store
    const users = useSelector(state => state.users);
    const user = users.find(user => user.index == 1);       //TBR takes a blog based on id for reference
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        if (data) {

            // If signup fails
            setshowsignupError(true);
            setsignupError("SignUp failed!");

            // if succeeds
            var new_user = Object.create(user);
            new_user.username = data.userName;
            new_user.email = data.email;
            new_user.pwd = data.Password;

            console.log(new_user);
            dispatch({ type: "CREATE_USER", user: new_user });

        }
        else {
            // redirect to signup success page
            navigate('/registered');
        }
    }

    return (
        <>
            <Row className='center_content'>
                <Col>
                    <Image
                        height={'250em'} src={signup} />

                    <div class="row justify-content-center">
                        <div className='col-4 '>
                            {showsignupError &&

                                <Alert variant="danger" onClose={() => setshowsignupError(false)} dismissible>
                                    <Alert.Heading id='no_bgrndcol'>{
                                        signupError
                                    }</Alert.Heading>
                                </Alert>
                            }
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Name</h1>
                        <input className='input_field' {...register("userName", { required: true })} />
                        <p className='validation_error'>{errors.userName?.type === 'required' && "Username is required"}</p>

                        <h1>Email</h1>
                        <input type='email' className='input_field' {...register("email", { required: true })} />
                        <p className='validation_error'> {errors.email && "Email is required"}</p>

                        <h1>Password</h1>
                        <input type='Password' className='input_field' {...register("Password", {
                            required: true,
                            minLength: 8,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
                        })} />
                        <p className='validation_error'> {errors.Password && "Password with 8 chars required, with alphabets, numbers & special characters "}</p>

                        <br />
                        <Button
                            type='submit'
                            size="lg"
                            className='mt-2' variant="outline-dark" id="hot_pink_btn">SignUp</Button>

                    </form>

                    <br />

                </Col>
            </Row>
        </>
    )
}

export default SignUp