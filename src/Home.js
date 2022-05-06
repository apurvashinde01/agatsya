import './App.css';
import Button from 'react-bootstrap/Button';
import { Col, Container, Image, Row } from 'react-bootstrap';
import NavbarCompo from './components/NavbarCompo';
import HomeNavbarCompo from './components/HomeNavbarCompo';
import BlogView from './components/BlogView';
import welcome_img from "./static/images/home_welcome_svg.svg";
import Astronaut_svg from "./static/images/Astronaut_svg.svg";
import BlogList from './components/BlogList';

function Home() {
  return (
    <>
      <Container>

        <Row className='mt-3 mb-3' >
          <Col>
            <HomeNavbarCompo />
          </Col>
        </Row>

        {/* <Row>
          <Image
            className='mt-3 mb-4'
            height={'300em'}
            src={Astronaut_svg} />

          <BlogList />
        </Row>
   */}
  
      </Container>
    </>
  );
}

export default Home;
