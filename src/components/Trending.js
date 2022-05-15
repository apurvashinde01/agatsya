import React from 'react'
import { Button, Image, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import signout from "../static/images/signupcta.gif";
import BlogList from './BlogList';

function Trending() {

  // fetch blogs from state
  var blogs = useSelector(state => state.blogs);
  const navigate = useNavigate();

  const published = blogs.filter(obj => {
    return obj.status === 'published';
  });

  const directToSignUp = () => {
    navigate('/signup');
  }

  return (
    <>
      <Row className='mb-3 center_content'>
        <h1 className='center_content'>Trending blogs</h1>

        <div className='center_content img_responsive'>
          <Image
            height={'250em'}
            src={signout} />
        </div>


        <h3>SignUp for more such content!</h3>

        <div class="row justify-content-center">
          <div className='col-2 '>
            <Button
              onClick={() => directToSignUp()}
              size="lg"
              className='mt-2' variant="outline-dark" id="hot_pink_btn">SignUp</Button>
          </div>
        </div>
      </Row>
      <BlogList bloglist={published} />
    </>
  )
}

export default Trending