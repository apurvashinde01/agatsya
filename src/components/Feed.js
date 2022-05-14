import React from 'react'
import { useSelector } from 'react-redux';
import BlogList from './BlogList';
import NoRoute404 from './NoRoute404';

function Feed() {

    // fetch blogs from state
    const blogs = useSelector(state => state.blogs);
    const login_session = useSelector(state => state.login_session);

    return (
        <>
            {
                login_session.logged_in ? (
                    <>
                        <h1 className='center_content'>Trending blogs</h1>
                        <BlogList bloglist={blogs} />
                    </>

                ) : (
                    <NoRoute404 />
                )
            }

        </>
    )
}

export default Feed