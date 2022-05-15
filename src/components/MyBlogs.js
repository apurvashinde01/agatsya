import React, { useState } from 'react'
import { ButtonGroup, Row, Tab, Tabs, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import BlogList from './BlogList'
import CreateBlog from './CreateBlog';

function MyBlogs() {

    // fetch login session data
    const login_session = useSelector(state => state.login_session);

    // default view: drafts
    const [SwitchView, setSwitchView] = useState('drafts');

    const loadView = (newview) => {
        setSwitchView(newview);
    }

    // fetch blogs from state
    var blogs = useSelector(state => state.blogs);

    blogs = blogs.filter(obj => {
        return obj.author === login_session.username;
    });

    const drafts = blogs.filter(obj => {
        return obj.status === 'drafts';
    });

    const published = blogs.filter(obj => {
        return obj.status === 'published';
    });

    return (
        <>
            <div className='center_content'>
                <ButtonGroup className='center_content' >
                    <Button variant="outline-dark"
                        onClick={() => loadView('drafts')}
                    >Drafts</Button>
                    <Button variant="outline-dark"
                        onClick={() => loadView('create')}
                        id="hot_pink_btn">New Blog</Button>
                    <Button variant="outline-dark"
                        onClick={() => loadView('published')}
                    >Published</Button>
                </ButtonGroup>
            </div>

            {
                SwitchView == 'drafts' && SwitchView != 'published' && SwitchView != 'create' ? (
                    <>
                        <br />
                        <h3 className='center_content'>Drafts</h3>
                        <BlogList bloglist={drafts} />
                    </>
                )
                    :
                    null
            }

            {
                SwitchView == 'published' ? (
                    <>
                        <br />
                        <h3 className='center_content'>Published</h3>
                        <BlogList  bloglist={published} />
                    </>
                )
                    :
                    null
            }

            {
                SwitchView == 'create' ? (
                    <>
                        <br />
                        <CreateBlog />
                    </>
                )
                    :
                    null
            }
        </>
    )
}

export default MyBlogs