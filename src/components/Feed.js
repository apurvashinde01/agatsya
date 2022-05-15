import React from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BlogList from './BlogList';
import Trending from './Trending';

function Feed() {

    // fetch blogs from state
    var blogs = useSelector(state => state.blogs);
    const login_session = useSelector(state => state.login_session);
    const navigate = useNavigate();

    blogs = blogs.filter(obj => {
        return obj.author !== login_session.username;
    });

    const directToCreateBlog = () => {
        navigate('/create');
    }

    return (
        <>
            {
                login_session.logged_in ? (
                    <>
                        <div class="row justify-content-center">
                            <div className='col-2'>
                                <Button
                                    onClick={() => directToCreateBlog()}
                                    className='center_content'
                                    variant="outline-dark" id="hot_pink_btn">New Blog</Button>
                            </div>
                        </div>
                        <BlogList bloglist={blogs} />
                    </>

                ) : (
                    // <NoRoute404 />
                    <Trending />
                )
            }

        </>
    )
}

export default Feed