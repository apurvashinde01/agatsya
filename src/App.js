import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './Home';
import NoRoute404 from './components/NoRoute404';
import Settings from './components/Settings';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import MyBlogs from './components/MyBlogs';
import ReadBlog from './components/ReadBlog';
import Feed from './components/Feed';
import RegisteredSuccess from './components/RegisteredSuccess';
import SignOut from './components/SignOut';
import EditBlog from './components/EditBlog';
import Trending from './components/Trending';
import Credits from './components/Credits';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route exact path="/" element={<Trending />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path='/read/:blog_id' element={<ReadBlog />} />
          <Route path='/edit/:blog_id' element={<EditBlog />} />
          <Route path="/registered" element={<RegisteredSuccess />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/create" element={<CreateBlog />} />
          {/* BlogList */}
          <Route path='*' exact={true} element={<NoRoute404 />} />
        </Routes>
        <Credits />
      </BrowserRouter>
    </>
  );
}

export default App;
