import React, { useState } from 'react'
import { Badge, Container, Nav, Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './HomeNavbarCompo.css';

function HomeNavbarCompo() {
    const [isHomeActive, setHomeActive] = useState(false);
    const [isMyBlogBtnActive, setMyBlogsBtnActive] = useState(false);
    const [isSetingsBtnActive, setSettingsBtnActive] = useState(false);
    const [isSignUpActive, setSignUpButtonActive] = useState(false);
    const [isSignInActive, setSignInButtonActive] = useState(false);

    const toggleVisited = (flag) => {

        setHomeActive(false);
        setMyBlogsBtnActive(false);
        setSettingsBtnActive(false);
        setSignUpButtonActive(false);
        setSignInButtonActive(false);

        if (flag == 1) {
            setHomeActive(true);
        } else if (flag == 2) {
            setMyBlogsBtnActive(true);
        } else if (flag == 3) {
            setSettingsBtnActive(true);
        }
        else if (flag == 4) {
            setSignUpButtonActive(true);
        }
        else if (flag == 5) {
            setSignInButtonActive(true);
        }
    }

    return (
        <>
            <Link to="/feed">
                <Button
                    variant={isHomeActive ? "dark" : null}
                    onClick={() => toggleVisited(1)}
                >Home</Button>
            </Link>

            <Link to="/myblogs">
                <Button
                    className='btn_margin'
                    variant={isMyBlogBtnActive ? "dark" : null}
                    onClick={() => toggleVisited(2)}
                >My Blogs</Button>
            </Link>

            <Link to="/settings">
                <Button
                    className='btn_margin'
                    variant={isSetingsBtnActive ? "dark" : null}
                    onClick={() => toggleVisited(3)}
                >Settings</Button>
            </Link>

            <Link to="/signup">
                <Button
                    className='btn_margin'
                    variant={isSignUpActive ? "dark" : null}
                    onClick={() => toggleVisited(4)}
                >SignUp</Button>
            </Link>

            <Link to="/signin">
                <Button
                    className='btn_margin'
                    variant={isSignInActive ? "dark" : null}
                    onClick={() => toggleVisited(5)}
                >SignIn</Button>
            </Link>
        </>
    )
}

export default HomeNavbarCompo