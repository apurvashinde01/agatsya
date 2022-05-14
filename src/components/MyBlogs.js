import React, { useState } from 'react'
import { ButtonGroup, Row, Tab, Tabs, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import BlogList from './BlogList'
import CreateBlog from './CreateBlog';

function MyBlogs() {

    // default view: drafts
    const [SwitchView, setSwitchView] = useState('drafts');

    const loadView = (newview) => {
        setSwitchView(newview);
    }

    // fetch blogs from state
    const blogs = useSelector(state => state.blogs);

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
                // (
                //     <>
                //         <h3 className='center_content'>No Drafts yet, Click on New Blog to start blogging!</h3>
                //     </>
                // )
            }

            {
                SwitchView == 'published' ? (
                    <>
                        <br />
                        <h3 className='center_content'>Published</h3>
                        <BlogList bloglist={published} />
                    </>
                )
                    :
                    null

                // (
                //     <>
                //         <br />
                //         <h3 className='center_content'>No Published blogs yet, publish existing drafts!</h3>
                //     </>
                // )
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
                // (
                //     <>
                //         <br />
                //         <h3 className='center_content'>Trouble creating blog...</h3>
                //     </>
                // )
            }
        </>
    )
}

export default MyBlogs