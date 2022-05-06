import React, { useState } from 'react'
import { Badge, Container, Nav, Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './HomeNavbarCompo.css';

function HomeNavbarCompo() {
    const [isHomeActive, setHomeActive] = useState(false);
    const [isMyBlogBtnActive, setMyBlogsBtnActive] = useState(false);
    const [isSetingsBtnActive, setSettingsBtnActive] = useState(false);

    const toggleVisited = (flag) => {

        setHomeActive(false);
        setMyBlogsBtnActive(false);
        setSettingsBtnActive(false);

        if (flag == 1) {
            setHomeActive(true);
        } else if (flag == 2) {
            setMyBlogsBtnActive(true);
        }
        else {
            setSettingsBtnActive(true);
        }
    }

    return (
        <>
            <Button
                variant={isHomeActive ? "dark" : null}
                onClick={() => toggleVisited(1)}
            >Home</Button>

            <Button
                className='btn_margin'
                variant={isMyBlogBtnActive ? "dark" : null}
                onClick={() => toggleVisited(2)}
            >My Blogs</Button>

            <Button
                className='btn_margin'
                variant={isSetingsBtnActive ? "dark" : null}
                onClick={() => toggleVisited(3)}
            >Settings</Button>
        </>
    )
}

export default HomeNavbarCompo